import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { LangProps } from "@/types/locale"

export const useUiUserStore = create<LangProps>() (
    devtools(
        persist(
            (set) => ({
                currentLang: 'fr',
                lang:{
                    fr : {
                        mainHeader: 'SYSTÈME DE SIGNALEMENT DIGITAL DES INCIDENTS',
                        footer: '© 2026 SSDI | PLATEFORME DIGITAL QHSE'
                    },
                    en: {
                        mainHeader: 'DIGITAL INCIDENT REPORTING SYSTEM',
                        footer: '© 2026 SSDI | QHSE DIGITAL PLATFORM'
                    }
                },
                pages: [
                    { 
                        id: 'page1', path: '/', subHeader:'Connectez-vous pour signaler un incident en quelques secondes', icon: 'UserLock' 
                    },
                    { 
                        id: 'page2', path: '/risk-types', subHeader:'Cliquez sur la carte correspondante pour définir le type du risque et passer à l`étape suivante.', icon: 'TriangleAlert' 
                    },
                    { 
                        id: 'page3', path: '/incidents', subHeader:'Sélectionnez le type d`incident observé ou choisissez "Autre" pour le décrire manuellement.', icon: 'ClipboardList' 
                    },
                    { 
                        id: 'page4', path: '/zones', subHeader:'Sélectionnez la zone d`incident observé ou choisissez "Autre" pour le décrire manuellement.', icon: 'MapPin' 
                    },
                ]
            }),
            {
                name: 'lang-storage'
            }
        ),
        {
            name: 'UI-Store',
            storage: createJSONStorage(() => sessionStorage),
        },
    )
)