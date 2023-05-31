import { arrowDown,outlineArrowRight,checkMark} from "../assets";


export const navlinks=[
    {
        name:'Why us',
        path:'/whyus',
        imgUrl:arrowDown,
        cName:'text-[#111] py-[0.5rem]',
        style:`absolute
        w-full 2md:w-[287px] lg:w-[287px] xl:w-[287px] h-[200px] 2md:h-[137px] xl:h-[137px] z-10 top-[100px] 2md:top-[88px] lg:top-[88px] xl:top-[105px] top-[150px]
        md:top-[180px]  bg-[#a1b5be]  2md:left-[150px] lg:left-[150px] xl:left-[275px] left-0 2md:rounded-[12px] lg:rounded-[12px] xl:rounded-[12px]
        shadow-[6px 0px 20px rgba(128,127,127,0.39)] p-[19px]`,
        items:[
            {
                id:'Howwehelp', 
                name:'How we help?', 
                icon:outlineArrowRight,
                subtitle:'we help by',
                contentItems:[
                    {icon:checkMark, text:'Being your interim, ad-hoc, fractional, virtual, remote, part-time, temp CTO and tech team'},
                    {icon:checkMark, text:'Grow the company'},
                    {icon:checkMark, text:'Scoping and prototyping'},
                    {icon:checkMark, text:'Establishing an exceptional engineering process'},
                    {icon:checkMark, text:'Focus on strong soft skills'},
                    {icon:checkMark, text:'Product/Market Fit Pivot Pointing for early-stage founders'},
             ],
            },
            {
                id:'Whypreferus', 
                name:'Why prefer us?', 
                icon:outlineArrowRight,
                subtitle:'why prefer us',
                contentItems:[
                    {icon:checkMark, text:'We are investor friendly'},
                    {icon:checkMark, text:'We partner with founders and their teams.'},
                    {icon:checkMark, text:'We build great technology products.'},
                    {icon:checkMark, text:'We don’t waste your money on consultancy slide decks.'},
                    {icon:checkMark, text:'We create well-document,robust products.'},
                    {icon:checkMark, text:'We assist in the transition to in-sourced teams.'},
                    ],
            },
                
            {
                id:'Whatweensure', 
                name:'What we ensure?',
                icon:outlineArrowRight,
                subtitle:'we ensure',
                contentItems:[
                    {icon:checkMark, text:'Lightning fast iteration'},
                    {icon:checkMark, text:'Absurdly low cost'},
                    {icon:checkMark, text:'Time for user feedback'},
                    {icon:checkMark, text:'Grow the company'},
                    {icon:checkMark, text:'Focus on strong soft skills'},
                    {icon:checkMark, text:'Founder-friendly services'},
                    {icon:checkMark, text:'Launch a fully functional product in weeks'},
                    {icon:checkMark, text:'Transparent pricing. Break the pre-series A cycle of death.'},
                    {icon:checkMark, text:'From web to mobile apps, we can build all the software workflows you need to delight your customers'},
                    ],
            },
            ],
    },
    {
        name:'Services and Solutions',
        path:'/servicesandsolution',
        imgUrl:arrowDown,
        cName:'text-[#111] py-[0.5rem]',
        style:`absolute
        w-full 2md:w-[287px] lg:w-[287px] xl:w-[287px] xl:h-[325px] z-10 xl:top-[105px] 2md:top-[88px] lg:top-[88px] top-[250px]
        md:top-[280px]  bg-[#a1b5be] 2md:left-[280px] lg:left-[280px] xl:left-[400px] left-0 2md:rounded-[12px] lg:rounded-[12px] xl:rounded-[12px]
        shadow-[6px 0px 20px rgba(128,127,127,0.39)] p-[19px]`,
        items:[
            {
                id:'InternetofBehaviors', 
                name:'Internet of Behaviors', 
                icon:outlineArrowRight,
                subtitle:'why prefer us?',
                
        },
            {id:'TotalExperience', name:'Total Experience', icon:outlineArrowRight},
            {id:'PrivacyEnhancingComputation', name:'Privacy Enhancing Computation',icon:outlineArrowRight},
            {id:'AnywhereOperations', name:'Anywhere Operations',icon:outlineArrowRight},
            {id:'CybersecurityMesh', name:'Cybersecurity Mesh',icon:outlineArrowRight},
            {id:'IntelligentComposable', name:'Intelligent Composable',icon:outlineArrowRight},
            {id:'AIEngineering', name:'AI Engineering',icon:outlineArrowRight},
            {id:'HyperAutomation', name:'Hyper Automation',icon:outlineArrowRight},
            ],        
    },
    {
        name:'programs and offering',
        path:'/programsandoffering',
        imgUrl:arrowDown,
        cName:'text-[#111] py-[0.5rem]',
        style:`absolute
        w-full 2md:w-[287px] lg:w-[287px] xl:w-[287px] xl:h-[150px] z-10 2md:top-[88px] lg:top-[88px] xl:top-[105px]  top-[340px]
        md:top-[380px] bg-[#a1b5be] 2md:left-[520px] lg:left-[540px] xl:left-[660px] left-0 2md:rounded-[12px] lg:rounded-[12px] xl:rounded-[12px]
        shadow-[6px 0px 20px rgba(128,127,127,0.39)] p-[19px]`,
        items:[
            {
                id:'CTO', 
                name:'CTO offerings', 
                icon:outlineArrowRight,
            },
            {id:'ValidationType', 
            name:'99-day MVP', 
            icon:outlineArrowRight
            },
            {id:'Portfolio', 
            name:'Strategic portfolio diversification', 
            icon:outlineArrowRight
            },

            ],
    },
]
