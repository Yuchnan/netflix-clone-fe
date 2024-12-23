import React from 'react'
import EachUtils from '@/utils/EachUtils'
import { LIST_FOOTER_EN, LIST_FOOTER_ID } from '@/constants/listFooter'
import OptionLanguage from '@/components/modules/LandingPage/OptionLanguage'
import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms'

const Footer = () => {
    const [language] = useAtom(languageAtom)

    return (
        <footer className='w-full text-white bg-black border-t-8 border-stone-900 py-8 p-8'>
            <div>
                QUESTION? Call <a href="">(+62) 812-1331-7965</a>
            </div>
            <ul className='grid sm:grid-cols-4 gap-4 py-8'>
                <EachUtils
                    of={language == 'en' ?LIST_FOOTER_EN : LIST_FOOTER_ID}
                    render={(item, index) => (
                        <li key={index}>
                            <a href={item.url} className='underline'>{item.title}</a>
                        </li>
                    )}
                />
            </ul>
                <OptionLanguage/>
            <p className='mt-4'>Netflix Indonesia Clone</p>
        </footer>
    )
}

export default Footer
