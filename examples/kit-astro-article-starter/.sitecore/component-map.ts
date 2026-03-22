import AccordionBlock from "@/components/accordion-block/AccordionBlock.astro";
import ArticleHeader from "@/components/article-header/ArticleHeader.astro";
import ArticleListing from "@/components/article-listing/ArticleListing.astro";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs.astro";
import ButtonComponent from "@/components/button-component/ButtonComponent.astro";
import ColumnSplitter from "@/components/column-splitter/ColumnSplitter.astro";
import Container from "@/components/container/Container.astro";
import Container25252525 from "@/components/container/Container25252525.astro";
import Container303030 from "@/components/container/Container303030.astro";
import Container3070 from "@/components/container/Container3070.astro";
import Container4060 from "@/components/container/Container4060.astro";
import Container5050 from "@/components/container/Container5050.astro";
import Container6040 from "@/components/container/Container6040.astro";
import Container6321 from "@/components/container/Container6321.astro";
import Container70 from "@/components/container/Container70.astro";
import Container7030 from "@/components/container/Container7030.astro";
import ContainerFullBleed from "@/components/container/ContainerFullBleed.astro";
import ContainerFullWidth from "@/components/container/ContainerFullWidth.astro";
import ContainerTwoColumn from "@/components/container/ContainerTwoColumn.astro";
import ContentBlock from "@/components/content-block/ContentBlock.astro";
import CtaBanner from "@/components/cta-banner/CtaBanner.astro";
import FooterNavigationColumn from "@/components/global-footer/FooterNavigationColumn.astro";
import GlobalFooter from "@/components/global-footer/GlobalFooter.astro";
import GlobalHeader from "@/components/global-header/GlobalHeader.astro";
import Hero from "@/components/hero/Hero.astro";
import Icon from "@/components/icon/Icon.astro";
import Image from "@/components/image/Image.astro";
import ImageBlock from "@/components/image-block/ImageBlock.astro";
import LinkList from "@/components/link-list/LinkList.astro";
import LogoTabs from "@/components/logo-tabs/LogoTabs.astro";
import LogoTabsWrapper from "@/components/logo-tabs/LogoTabsWrapper.astro";
import MultiPromo from "@/components/multi-promo/MultiPromo.astro";
import MultiPromoTabs from "@/components/multi-promo-tabs/MultiPromoTabs.astro";
import MultiPromoTabsWrapper from "@/components/multi-promo-tabs/MultiPromoTabsWrapper.astro";
import Navigation from "@/components/navigation/Navigation.astro";
import NavigationListItem from "@/components/navigation/NavigationListItem.astro";
import PageContent from "@/components/page-content/PageContent.astro";
import PageHeader from "@/components/page-header/PageHeader.astro";
import PartialDesignDynamicPlaceholder from "@/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder.astro";
import Promo from "@/components/promo/Promo.astro";
import PromoAnimated from "@/components/promo-animated/PromoAnimated.astro";
import PromoBlock from "@/components/promo-block/PromoBlock.astro";
import RichText from "@/components/rich-text/RichText.astro";
import RichTextBlock from "@/components/rich-text-block/RichTextBlock.astro";
import RowSplitter from "@/components/row-splitter/RowSplitter.astro";
import SecondaryNavigation from "@/components/secondary-navigation/SecondaryNavigation.astro";
import SiteMetadata from "@/components/site-metadata/SiteMetadata.astro";
import StructuredData from "@/components/structured-data/StructuredData.astro";
import SubscriptionBanner from "@/components/subscription-banner/SubscriptionBanner.astro";
import SubscriptionBannerWrapper from "@/components/subscription-banner/SubscriptionBannerWrapper.astro";
import TestimonialCarousel from "@/components/testimonial-carousel/TestimonialCarousel.astro";
import TestimonialCarouselWrapper from "@/components/testimonial-carousel/TestimonialCarouselWrapper.astro";
import TextBanner from "@/components/text-banner/TextBanner.astro";
import TextBanner01 from "@/components/text-banner/TextBanner01.astro";
import TextBanner02 from "@/components/text-banner/TextBanner02.astro";
import Title from "@/components/title/Title.astro";
import TopicListing from "@/components/topic-listing/TopicListing.astro";
import VerticalImageAccordion from "@/components/vertical-image-accordion/VerticalImageAccordion.astro";
import Video from "@/components/video/Video.astro";

const components = new Map<string, any>([
  ["AccordionBlock", AccordionBlock],
  ["ArticleHeader", ArticleHeader],
  ["ArticleListing", ArticleListing],
  ["Breadcrumbs", Breadcrumbs],
  ["ButtonComponent", ButtonComponent],
  ["ColumnSplitter", ColumnSplitter],
  ["Container", Container],
  ["Container25252525", Container25252525],
  ["Container303030", Container303030],
  ["Container3070", Container3070],
  ["Container4060", Container4060],
  ["Container5050", Container5050],
  ["Container6040", Container6040],
  ["Container6321", Container6321],
  ["Container70", Container70],
  ["Container7030", Container7030],
  ["ContainerFullBleed", ContainerFullBleed],
  ["ContainerFullWidth", ContainerFullWidth],
  ["ContainerTwoColumn", ContainerTwoColumn],
  ["ContentBlock", ContentBlock],
  ["CtaBanner", CtaBanner],
  ["FooterNavigationColumn", FooterNavigationColumn],
  ["GlobalFooter", GlobalFooter],
  ["GlobalHeader", GlobalHeader],
  ["Hero", Hero],
  ["Icon", Icon],
  ["Image", Image],
  ["ImageBlock", ImageBlock],
  ["LinkList", LinkList],
  ["LogoTabs", LogoTabs],
  ["LogoTabsWrapper", LogoTabsWrapper],
  ["MultiPromo", MultiPromo],
  ["MultiPromoTabs", MultiPromoTabs],
  ["MultiPromoTabsWrapper", MultiPromoTabsWrapper],
  ["Navigation", Navigation],
  ["NavigationListItem", NavigationListItem],
  ["PageContent", PageContent],
  ["PageHeader", PageHeader],
  ["PartialDesignDynamicPlaceholder", PartialDesignDynamicPlaceholder],
  ["Promo", Promo],
  ["PromoAnimated", PromoAnimated],
  ["PromoBlock", PromoBlock],
  ["RichText", RichText],
  ["RichTextBlock", RichTextBlock],
  ["RowSplitter", RowSplitter],
  ["SecondaryNavigation", SecondaryNavigation],
  ["SiteMetadata", SiteMetadata],
  ["StructuredData", StructuredData],
  ["SubscriptionBanner", SubscriptionBanner],
  ["SubscriptionBannerWrapper", SubscriptionBannerWrapper],
  ["TestimonialCarousel", TestimonialCarousel],
  ["TestimonialCarouselWrapper", TestimonialCarouselWrapper],
  ["TextBanner", TextBanner],
  ["TextBanner01", TextBanner01],
  ["TextBanner02", TextBanner02],
  ["Title", Title],
  ["TopicListing", TopicListing],
  ["VerticalImageAccordion", VerticalImageAccordion],
  ["Video", Video],
]);

export default components;
