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
                TourRequestInfo: "Book this experience or ask us more informations!",
                InsertPost: "Insert post",
                EditPost: "Edit post",
                Author: "Author",
                Title: "Title",
                PostTitle: "Post title",
                Content: "Content",
                PostContent: "Contenuto del post",
                Images: "Images",
                EditTour: "Edit tour",
                NewTour: "New tour",
                Accept: "Accept",
                CookieConsentText: "This site uses technical cookies for the optimum use of the site. By closing this banner, scrolling through this page or by clicking on any of its elements you allow for the use of cookies",
                //WhoWeAre1: "",
                //WhoWeAre2: "",
                //WhoWeAre3: "",
                //WhoWeAre4: "",
                OurContributors: "Our contributors",
                FollowUsOn: "Follow us on",
                Book: "Book", 
                Type: "Type"
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
                TourRequestInfo: "Prenota questa esperienza o chiedici maggiori informazioni!",
                InsertPost: "Nuovo post",
                EditPost: "Modifica post",
                Author: "Autore",
                Title: "Titolo",
                PostTitle: "Titolo del post",
                Content: "Contenuto",
                PostContent: "Contenuto del post",
                Images: "Immagini",
                EditTour: "Modifica tour",
                NewTour: "Nuovo tour",
                Accept: "Accetta",
                CookieConsentText: "Questo sito utilizza cookie tecnici per consentire la fruizione ottimale del sito. Chiudendo questo banner, scorrendo questa pagina o cliccando su qualunque suo elemento consenti all'uso dei cookie",
                WhoWeAre1: "Romeyouup nasce con l’obiettivo di condurti a spasso per Roma attraverso esperienze di visita originali e personalizzate.",
                WhoWeAre2: "Romeyouup nasce nelle menti e nei cuori di un gruppo di amici che vuole far conoscere la città in cui vive, Roma, condividendo percorsi affascinanti e inediti. Chi qui ci è cresciuto, chi ci è arrivato da lontano, chi ha scelto di viverci, Roma è la loro casa e il turismo il loro ambito di lavoro e la loro passione.",
                WhoWeAre3: "Romeyouup nasce per offrire esperienze su misura per te: se non vuoi perderti la visita alle icone della città ma senza stress; se sei un tipo che va con la mappa sotto braccio alla scoperta di luoghi inediti; se sei un appassionato di bike, street art, food tasting o altro… ",
                WhoWeAre4: "In visita per un giorno o in viaggio da una vita, se sei a Roma non esitare a chiamarci: la Città Eterna ti sta aspettando!",
                OurContributors: "I nostri contributori",
                CostGroupHint: "La quota è riferita alla partecipazione in gruppi (minimo 4 persone). Per singoli o gruppi meno numerosi chiedici ulteriori informazioni!",
                ContactsHint: "romeyouup nasce con lo scopo di offrirti un'esperienza completamente nuova con la città! Se avessi un'idea o volessi suggerirci una nuova esperienza, non esitare a scrivercelo!",
                FollowUsOn: "Seguici anche su",
                Book: "Prenota",
                GeneralInfo: "Informazioni generali",
                DateGeneralInfo: "Al momento non sono previste date per questo tour. Scrivici per programmarla in base alle tue preferenze!",
                HealthGeneralInfo: "Questa, come tutte le nostre iniziative, vengono organizzate ed effettuate nel rispetto delle vigenti norme atte al contrasto della diffusione da COVID19",
                EcoGeneralInfo: "romeyouup crede nel turismo sostenibile fatto nel rispetto della città e dell'ambiente. Per questo non verrà distribuito materiale cartaceo e, nel caso di visite a musei e se possibile, saranno sempre preferite le modalità ticketless",
                InfoGeneralInfo: "L'itinerario che vedi è una proposta di visita! Potrebbe succedere che durante il suo svolgimento possa subire delle leggere modifiche in base a interessi dei visitatori o per motivi di forza maggiore. Però ti assicuriamo che sarà ugualmente memorabile!",
                Type: "Tipo"
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