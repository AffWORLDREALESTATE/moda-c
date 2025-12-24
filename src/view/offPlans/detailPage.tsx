"use client";

import { getPropertyBySlug } from "@/src/api/offPlans";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
import EnquireForm from "@/src/components/common/enquireForm";
import { Dialog, DialogContent, DialogTitle } from "@/src/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { Icon } from "@iconify/react";
import LocationSection from "./Location";
import { translateProperty } from "@/src/lib/translate";
import { normalizeLocationName } from "@/src/lib/utils";

// Component to format description with bullet points
function FormattedDescription({ description }: { description: string }) {
  if (!description) return null;

  // Split by double line breaks first, then process each section
  const sections = description.split(/\n\s*\n/).filter(s => s.trim());
  
  return (
    <div className="space-y-6">
      {sections.map((section, sectionIdx) => {
        const trimmed = section.trim();
        const lines = trimmed.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        
        if (lines.length === 0) return null;

        // Check if first line ends with colon (likely a heading)
        const firstLine = lines[0];
        const isHeadingPattern = firstLine.endsWith(':') && lines.length > 1;
        
        if (isHeadingPattern) {
          const heading = firstLine.slice(0, -1).trim();
          const listItems = lines.slice(1)
            .map(l => l.replace(/^[-•*]\s*/, '').replace(/^\d+[.)]\s*/, '').trim())
            .filter(l => l.length > 0);

          if (listItems.length > 0) {
            return (
              <div key={sectionIdx} className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {heading}
                </h3>
                <ul className="list-disc list-outside space-y-2.5 ml-5 sm:ml-6">
                  {listItems.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-base sm:text-lg font-normal text-gray-700 leading-relaxed pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
        }

        // Check if all lines look like list items (multiple short lines)
        const allShortLines = lines.length > 1 && 
          lines.every(l => l.length < 200 && !l.match(/[.!?]\s*$/));
        
        // Common list item patterns (amenities, features, etc.)
        const commonPatterns = /^(Gymnasium|Indoor|Swimming|Pool|Landscaped|Tennis|Children|Kids|Barbecue|BBQ|Parking|Security|Clubhouse|Spa|Restaurant|Beach|Marina|Garden|Playground|Fitness|Sports|Recreation)/i;
        const hasListPatterns = lines.length > 1 && lines.some(l => commonPatterns.test(l.trim()));
        
        // Check for text like "including:" or "features:" anywhere in the section
        const hasListKeywords = trimmed.toLowerCase().match(/(including|features|amenities|advantages|benefits|facilities):/i);

        if ((allShortLines || hasListPatterns) && lines.length > 2) {
          const listItems = lines
            .map(l => l.replace(/^[-•*]\s*/, '').replace(/^\d+[.)]\s*/, '').trim())
            .filter(l => l.length > 0);

          // Extract any intro text before the list
          let introText = '';
          let listStartIdx = 0;
          
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].toLowerCase().includes('including') || 
                lines[i].toLowerCase().includes('can enjoy') ||
                lines[i].length < 100) {
              if (lines[i].length > 50 && !commonPatterns.test(lines[i])) {
                introText = lines[i];
                listStartIdx = i + 1;
                break;
              } else {
                listStartIdx = i;
                break;
              }
            }
          }

          const finalListItems = listStartIdx > 0 
            ? lines.slice(listStartIdx).map(l => l.replace(/^[-•*]\s*/, '').replace(/^\d+[.)]\s*/, '').trim()).filter(l => l.length > 0)
            : listItems;

          return (
            <div key={sectionIdx} className="space-y-4">
              {introText && (
                <p className="text-base sm:text-lg font-normal text-gray-700 leading-relaxed mb-2">
                  {introText}
                </p>
              )}
              {finalListItems.length > 0 && (
                <ul className="list-disc list-outside space-y-2.5 ml-5 sm:ml-6">
                  {finalListItems.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-base sm:text-lg font-normal text-gray-700 leading-relaxed pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }

        // Regular paragraph
        return (
          <p key={sectionIdx} className="text-base sm:text-lg font-normal text-gray-700 leading-relaxed">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

export default function DetailPage({ slug }: { slug: string }) {
  const { formatPrice, t, currencyIconSrc, currentLanguage } = useLanguage();
  const [property, setProperty] = useState<any>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedFloorPlan, setSelectedFloorPlan] =
    useState<NormalizedFloorPlan | null>(null);

  // Normalized helpers for key specs
  const bedroomMin =
    property?.newParam?.bedroomMin ??
    property?.bedRoomsMin ??
    property?.bedRooms;
  const bedroomMax =
    property?.newParam?.bedroomMax ?? property?.bedRoomsMax ?? null;

  const bathroomMin =
    property?.newParam?.bathroomMin ??
    property?.bathroomsMin ??
    property?.bathrooms;
  const bathroomMax =
    property?.newParam?.bathroomMax ?? property?.bathroomsMax ?? null;

  const sizeMin =
    property?.newParam?.size_min ??
    property?.size_min ??
    property?.size ??
    null;
  const sizeMax =
    property?.newParam?.size_max ?? property?.size_max ?? null;

  // Normalize property type; backend may send `property_type`, `type`, or `propertyTypes` (array)
  const propertyType = (() => {
    const fromNewParam =
      property?.newParam?.property_type ?? property?.newParam?.type;

    const fromRoot =
      property?.property_type ?? property?.type;

    // Backend field: propertyTypes (often an array)
    const fromArray = property?.newParam?.propertyTypes ?? property?.propertyTypes;
    let fromArrayStr: string | null = null;
    if (Array.isArray(fromArray) && fromArray.length > 0) {
      fromArrayStr = fromArray
        .map((v: any) => (typeof v === "string" ? v.trim() : ""))
        .filter(Boolean)
        .join(", ");
    } else if (typeof fromArray === "string") {
      fromArrayStr = fromArray.trim();
    }

    const value = fromNewParam || fromRoot || fromArrayStr;
    return typeof value === "string" && value.trim() ? value.trim() : null;
  })();

  const city =
    property?.location?.city ||
    property?.city ||
    null;

  const floorPlansRaw =
    property?.newParam?.floorPlans ||
    property?.newParam?.floor_plans ||
    property?.floorPlans ||
    property?.floor_plans ||
    property?.newParam?.floorPlanImages ||
    property?.floorPlanImages;

  type NormalizedFloorPlan = {
    id?: number;
    title?: string;
    bedrooms?: string | number;
    price?: number;
    size?: number;
    layout?: string | null;
    propertyType?: string;
    soldOut?: boolean;
  };

  // Normalize backend floor plan objects/strings into a consistent structure
  const floorPlanItems: NormalizedFloorPlan[] = (() => {
    if (!floorPlansRaw) return [];

    const rawArray = Array.isArray(floorPlansRaw)
      ? floorPlansRaw
      : [floorPlansRaw];

    return rawArray
      .map((item: any): NormalizedFloorPlan | null => {
        if (!item) return null;

        // String value – treat as a bare layout URL
        if (typeof item === "string") {
          const trimmed = item.trim();
          if (!trimmed) return null;
          return { layout: trimmed };
        }

        if (typeof item === "object") {
          const layoutCandidate =
            (item as any).layout ||
            (item as any).url ||
            (item as any).src ||
            (item as any).image ||
            (item as any).path;

          const layout =
            typeof layoutCandidate === "string" && layoutCandidate.trim()
              ? layoutCandidate.trim()
              : null;

          return {
            id: item.id,
            title: item.title,
            bedrooms: item.Bedroom ?? item.bedrooms,
            price: item.price,
            size: item.size,
            layout,
            propertyType: item.property_type ?? item.propertyType,
            soldOut: item.sold_out ?? item.soldOut ?? false,
          };
        }

        return null;
      })
      .filter((plan): plan is NormalizedFloorPlan => !!plan);
  })();

  useEffect(() => {
    async function fetchProperty() {
      try {
        const data = await getPropertyBySlug(slug);
        const rawProperty = data?.projects?.[0];
        
        if (rawProperty) {
          // Translate the property data based on current language
          setIsTranslating(true);
          const translatedProperty = await translateProperty(rawProperty, currentLanguage.code);
          setProperty(translatedProperty);
        }
      } catch (error) {
        console.error('Error fetching/translating property:', error);
      } finally {
        setIsTranslating(false);
      }
    }
    fetchProperty();
  }, [slug, currentLanguage.code]);

  useEffect(() => {
    if (!property?.photos || property.photos.length <= 1) return;

    const interval = setInterval(() => {
      setHeroImageIndex(
        (prevIndex) => (prevIndex + 1) % property.photos.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [property?.photos]);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === property.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? property.photos.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  if (!property) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <p className="text-gray-600 text-sm md:text-base">Loading...</p>
      </div>
    );
  }

  const hasPhotos = Array.isArray(property.photos) && property.photos.length > 0;
  return (
    <div className="luxury-bg">
      <section 
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] w-full flex items-end justify-center text-center overflow-hidden"
        onMouseMove={hasPhotos ? handleMouseMove : undefined}
      >
        {hasPhotos && (
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              {property.photos.map((photo: string, index: number) => (
                <Image
                  key={index}
                  src={photo}
                  alt="Luxury Living in Dubai"
                  fill
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === heroImageIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                  style={{
                    transform: index === heroImageIndex 
                      ? `scale(1.1) translate(${(mousePosition.x - 50) * 0.02}%, ${(mousePosition.y - 50) * 0.02}%)`
                      : 'scale(1)',
                    transformOrigin: 'center center'
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-black/20 z-20" />
            <div className="hidden lg:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 space-x-1.5 z-30">
              {property.photos.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setHeroImageIndex(index)}
                  className={`w-0.5 h-0.5 rounded-full transition-all duration-300 ${
                    index === heroImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
        <div className="relative z-30 text-white px-4 pb-8 sm:pb-12 md:pb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-4 leading-tight tracking-wide font-serif">
            {property?.name}
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-light mb-4 sm:mb-6 tracking-wider uppercase text-primary">
            {normalizeLocationName(`${property?.location?.community || ""}${property?.location?.sub_community ? `, ${property?.location?.sub_community}` : ""}${property?.location?.city ? `, ${property?.location?.city}` : ""}`)}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base font-light uppercase text-primary mb-6 sm:mb-8 md:mb-12 px-2">
            <a
              className="hover:underline cursor-pointer text-center"
              onClick={() => setIsOpen(true)}
            >
              {t('details.registerNow')}
            </a>
            {property?.agent && (
              <>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 bg-white px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-xl border border-gray-200 shadow-lg w-full sm:w-auto max-w-sm sm:max-w-none">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden border-2 md:border-3 border-[#0a4b6f] shadow-md">
                      {property.agent.avatar ? (
                        <Image
                          src={property.agent.avatar}
                          alt={property.agent.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f] flex items-center justify-center">
                          <span className="text-sm sm:text-base md:text-lg font-bold text-white">
                            {property.agent.name?.charAt(0) || 'A'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col text-center sm:text-left">
                    <span className="text-[10px] sm:text-xs md:text-xs font-semibold text-gray-800 uppercase tracking-wide">
                      {property.agent.name}
                    </span>
                    <span className="text-[10px] sm:text-[10px] md:text-[10px] text-[#0a4b6f] font-medium uppercase tracking-wider">
                      Property Specialist
                    </span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    <a
                      href={`https://wa.me/${property.agent.phone?.replace(/[^0-9]/g, '')}?text=Hi ${property.agent.name}, I'm interested in ${property.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="iconoir:whatsapp-solid" className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </a>
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#0a4b6f] hover:bg-[#1a6b8f] rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="line-md:phone-call-filled" className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${property.agent.email}?subject=Inquiry about ${property.name}`}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="material-symbols:mail-outline" className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr className="border-t border-gray-200 mb-10 sm:mb-12" />

          {/* Luxury Property Details Section */}
          <div className="relative mb-6 sm:mb-8">
            {/* Luxury Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a4b6f]/5 via-transparent to-[#1a6b8f]/5 rounded-3xl"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#0a4b6f] to-transparent rounded-full"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm border border-[#0a4b6f]/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {/* Price Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center group"
                >
                  <h3 className="text-[10px] font-semibold uppercase text-[#0a4b6f] mb-3 tracking-[0.2em] font-serif">{t('common.from')}</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-serif flex items-center justify-center gap-2">
                    {currencyIconSrc && (
                      <Image src={currencyIconSrc} alt="AED" width={20} height={20} />
                    )}
                    {property?.newParam?.price
                      ? formatPrice(property.newParam.price)
                      : property?.price_from
                      ? formatPrice(property.price_from)
                      : property?.price
                      ? formatPrice(property.price)
                      : "Price on Request"}
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto rounded-full"></div>
                </motion.div>

                {/* Completion Date Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center group"
                >
                  <h3 className="text-[10px] font-semibold uppercase text-[#0a4b6f] mb-3 tracking-[0.2em] font-serif">Completion Date</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-serif">
                    {property?.newParam?.handoverTime
                      ? moment(property?.newParam?.handoverTime).format("MMMM YYYY")
                      : property?.completionDate
                      ? moment(property?.completionDate).format("MMMM YYYY")
                      : property?.handoverTime
                      ? moment(property?.handoverTime).format("MMMM YYYY")
                      : "TBA"}
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto rounded-full"></div>
                </motion.div>

                {/* Construction Stage Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center group sm:col-span-2 lg:col-span-1"
                >
                  <h3 className="text-[10px] font-semibold uppercase text-[#0a4b6f] mb-3 tracking-[0.2em] font-serif">{t('details.constructionStage')}</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-serif">
                    {property?.constructionStage || property?.completionStatus || "Off-plan"}
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* end primary stats section (price / completion / stage) */}
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="bg-white pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {hasPhotos && (
            <div className="mb-16">
              {/* Main Carousel Container */}
              <div className="relative group">
                {/* Main Image Display */}
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={property.photos[selectedImageIndex]}
                        alt={`${property.name} - Image ${
                          selectedImageIndex + 1
                        }`}
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {property.photos.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 opacity-70 sm:opacity-0 group-hover:opacity-100 z-10 bg-black/20 sm:bg-transparent"
                      >
                        <Icon icon="teenyicons:left-outline" fontSize={20} className="sm:text-[30px]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 opacity-70 sm:opacity-0 group-hover:opacity-100 z-10 bg-black/20 sm:bg-transparent"
                      >
                        <Icon icon="teenyicons:right-outline" fontSize={20} className="sm:text-[30px]" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Carousel */}
                <div className="relative">
                  <div className="flex gap-1 sm:gap-2 md:gap-4 overflow-x-auto scrollbar-hide pb-2">
                    <div className="flex gap-1 sm:gap-2 md:gap-4 min-w-max">
                      {property.photos.map((photo: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden rounded transition-all duration-200 ${
                            selectedImageIndex === index
                              ? "ring-2 ring-primary opacity-100 scale-105"
                              : "opacity-70 hover:opacity-90 hover:scale-102"
                          }`}
                        >
                          <Image
                            src={photo || "/placeholder.svg"}
                            alt={`${property.name} thumbnail ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            quality={75}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scroll Indicators for Thumbnails */}
                  <div className="flex justify-center mt-4 space-x-1">
                    {Array.from({
                      length: Math.ceil(property.photos.length / 5),
                    }).map((_, pageIndex) => (
                      <div
                        key={pageIndex}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          Math.floor(selectedImageIndex / 5) === pageIndex
                            ? "bg-primary"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Project Facts + Description (after images) */}
          {(bedroomMin || bathroomMin || sizeMin || propertyType || city || property?.description) && (
            <div className="mt-12 sm:mt-16 mb-16 sm:mb-20">
              

              {property?.description && (
                <div className="mt-12 sm:mt-16">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-800 mb-6 sm:mb-8 text-left font-bold">
                    {t("details.description")}
                  </h2>
                  {(bedroomMin || bathroomMin || sizeMin || propertyType || city) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
                  {propertyType && (
                    <div className="bg-white border border-gray-200 rounded-xl px-6 py-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0a4b6f] mb-3">
                        Property Type
                      </p>
                      <p className="text-sm font-semibold text-gray-900 break-words capitalize leading-tight">
                        {propertyType}
                      </p>
                    </div>
                  )}

                  {city && (
                    <div className="bg-white border border-gray-200 rounded-xl px-6 py-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0a4b6f] mb-3">
                        {t("details.city")}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 break-words leading-tight">
                        {normalizeLocationName(city)}
                      </p>
                    </div>
                  )}

                  {bedroomMin && (
                    <div className="bg-white border border-gray-200 rounded-xl px-6 py-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0a4b6f] mb-3">
                        {t("details.bedrooms")}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">
                        {bedroomMax && bedroomMax !== bedroomMin
                          ? `${bedroomMin} - ${bedroomMax}`
                          : bedroomMin}
                      </p>
                    </div>
                  )}

                  {sizeMin && (
                    <div className="bg-white border border-gray-200 rounded-xl px-6 py-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0a4b6f] mb-3">
                        {t("details.homeSizeSqft")}
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">
                        {sizeMax && sizeMax !== sizeMin
                          ? `${sizeMin} – ${sizeMax} sq ft`
                          : `${sizeMin} sq ft`}
                      </p>
                    </div>
                  )}
                </div>
              )}
                  <FormattedDescription description={property.description} />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Floor Plans */}
        {floorPlanItems.length > 0 && (
          <div className="max-w-6xl mx-auto mt-12 sm:mt-16 mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-800 mb-3 sm:mb-4 font-bold">
              Floor plans
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Explore typical layouts and unit configurations available in this development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {floorPlanItems.map((plan, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    type="button"
                    className="relative flex-1 bg-white group"
                    onClick={() => setSelectedFloorPlan(plan)}
                  >
                    {plan.layout ? (
                      <Image
                        src={plan.layout}
                        alt={`${property.name} floor plan ${index + 1}`}
                        fill
                        className="object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
                        No layout image
                      </div>
                    )}
                  </button>
                  <div className="px-5 py-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-gray-900">
                        {plan.title || `Type ${index + 1}`}
                      </p>
                      {plan.bedrooms && (
                        <p className="text-xs text-gray-600 font-medium">
                          {plan.bedrooms} BR
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      {plan.size && (
                        <span className="font-medium">{plan.size} sq ft</span>
                      )}
                      {plan.price && (
                        <span className="font-semibold text-gray-900">
                          {formatPrice(plan.price)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {property?.newParam?.permitQRCode && (
          <div className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shadow-sm max-w-sm">
              {/* QR Code with Palm Tree Emblem */}
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <Image
                    src={property?.newParam?.permitQRCode}
                    alt="QR Code"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Verification Text */}
              <div className="text-gray-700 text-center sm:text-left">
                <p className="text-[10px] sm:text-xs">{t('details.verifiedBy')} <span className="font-bold">{t('details.dld')}</span></p>
              </div>
            </div>
          </div>
        )}


        <div className="my-5">
          <LocationSection property={property} />
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <AnimatePresence>
            <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-none px-4 sm:px-6 md:px-8 py-3 sm:py-4">
              <motion.div
                key="dialog"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <DialogTitle className="mb-4 sm:mb-6 flex justify-between">
                  <div>
                    <h2 className="text-base sm:text-lg md:text-xl font-mono font-thin text-black text-center font-serif">{t('details.takeFirstStep')}</h2>
                    <p className="font-mono font-thin text-center text-[10px] sm:text-xs md:text-sm text-neutral-400">
                      Get a free consultation, personalized investment strategy,
                      and exclusive access to Dubai best properties.
                    </p>
                  </div>
                  <Icon
                    icon={"material-symbols-light:cancel-outline"}
                    fontSize={20}
                    className="text-neutral-400 cursor-pointer sm:text-[25px]"
                    onClick={() => setIsOpen(false)}
                  />
                </DialogTitle>

                <EnquireForm type="offPlan" />
              </motion.div>
            </DialogContent>
          </AnimatePresence>
        </Dialog>

        {/* Floor plan lightbox */}
        <AnimatePresence>
          {selectedFloorPlan && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedFloorPlan(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedFloorPlan(null)}
                  className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
                >
                  <Icon icon="material-symbols:close" className="w-5 h-5" />
                </button>
                <div className="relative w-full aspect-[4/3] bg-gray-50">
                  {selectedFloorPlan.layout ? (
                    <Image
                      src={selectedFloorPlan.layout}
                      alt={`${property.name} floor plan ${selectedFloorPlan.title || ""}`}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
                      No layout image available
                    </div>
                  )}
                </div>
                <div className="px-4 py-3 border-t border-gray-200 bg-white flex flex-wrap justify-between gap-2 text-xs">
                  <div className="font-semibold text-gray-900">
                    {selectedFloorPlan.title || t("details.floorPlan")}
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-700">
                    {selectedFloorPlan.bedrooms && (
                      <span>{selectedFloorPlan.bedrooms} BR</span>
                    )}
                    {selectedFloorPlan.size && (
                      <span>{selectedFloorPlan.size} sq ft</span>
                    )}
                    {selectedFloorPlan.price && (
                      <span className="font-medium">
                        {formatPrice(selectedFloorPlan.price)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
