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
                Italian: "Italian",
                ToursFilter: "Filter among the available tours",
                YourName: "Your name",
                YourEmail: "Your email address",
                CompileAllFields: "Check on all required fields",
                Send: "Send",
                ContactUsMessage: "Mail us for suggestions or proposals, we'll be back soon!",
                YourMessage: "Your message",
                CompileField: "Insert a value for this field",
                NotValidEmail: "The email address is not valid",
                ErrorWhileMailing: "An error occured while sending the email, please retry later!",
                SuccessWhileMailing: "We have received your message, please check for our response your inbox or your spam folder!",
                TourRequestInfo: "Book this experience or ask us more informations!"
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
                Italian: "Italiano",
                ToursFilter: "Filtra tra i tour disponibili",
                YourName: "Il tuo nome",
                YourEmail: "La tua email",
                CompileAllFields: "Compila tutti i campi richiesti",
                Send: "Invia",
                ContactUsMessage: "Scrivici per suggerimenti e richieste, sarai ricontattato al più presto!",
                YourMessage: "Il tuo messaggio",
                CompileField: "Inserisci un valore per questo campo",
                NotValidEmail: "La mail non è valida",
                ErrorWhileMailing: "É avvenuto un errore durante l'invio del messaggio, riprova più tardi!",
                SuccessWhileMailing: "Abbiamo ricevuto il tuo messaggio! Controlla nella tua email se hai ricevuto la risposta, eventualmente controlla nella cartella di posta indesiderata!",
                TourRequestInfo: "Prenota questa esperienza o chiedici maggiori informazioni!"
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