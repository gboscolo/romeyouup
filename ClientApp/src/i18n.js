import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        en: {
            translations: {
                DiscoverWhatWeHaveForYou: "Discover what we've in mind for you",
                WhoWeAre: "Who we are",
                OurProposals: "Our proposals",
                Contacts: "Contacts",
                All: "All",
                Experiences: "Experiences",
                WalkingTours: "Walking tours",
                Museums: "Museums",
                ReadOneOfOurPost: "Or read one of our posts",
                Rome: "Rome",
                AsYouNeverSeen: "As you never seen",
                Loading: "Loading",
                From: "From",
                AlsoRead: "Read also",
                Duration: "Duration",
                Modality: "Modality",
                Cost: "Cost",
                ForPerson: "for each person",
                WhatWeWillSee: "What we will see",
                Shortly: "In brief",
                Description: "Description",
                AdditionalInfo: "Addtional informations",
                AlsoLook: "Take also a look on",
                Hours: "hours",
                BikeTour: "Tour by bike",
                WalkTour: "Tour by walk",
                SeeAll: "See all",
                SelectLinguage: "Select linguage",
                English: "English",
                Spanish: "Spanish",
                Italian: "Italian"
            }
        },
        it: {
            translations: {
                DiscoverWhatWeHaveForYou: "Scopri cosa abbiamo in mente per te",
                WhoWeAre: "Chi siamo",
                OurProposals: "Le nostre proposte",
                Contacts: "Contatti",
                All: "Tutti",
                Experiences: "Esperienze",
                WalkingTours: "Walking tours",
                Museums: "Musei",
                ReadOneOfOurPost: "O leggi uno dei nostri post",
                Rome: "Roma",
                AsYouNeverSeen: "Come non l'hai mai vista",
                Loading: "Caricamento",
                From: "Da",
                AlsoRead: "Leggi anche",
                Duration: "Durata",
                Modality: "Modalità",
                Cost: "Costo",
                ForPerson: "a persona",
                WhatWeWillSee: "Cosa vedremo",
                Shortly: "In breve",
                Description: "Descrizione",
                AdditionalInfo: "Informazioni aggiuntive",
                AlsoLook: "Vedi anche",
                Hours: "ore",
                BikeTour: "Tour in bici",
                WalkTour: "Tour a piedi",
                SeeAll: "Vedi tutti",
                SelectLinguage: "Seleziona lingua",
                English: "Inglese",
                Spanish: "Spagnolo",
                Italian: "Italiano"
            }
        },
        es: {
            translations: {
                DiscoverWhatWeHaveForYou: "Descubra lo que tenemos en mente para usted"
            }
        }
    },
    fallbackLng: "it",

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;