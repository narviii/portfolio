import Image from 'next/image'

const lnkStyle = "mx-1"


export default function SocialLinks() {
    return (
        <div className="flex">
            <a href="https://t.me/vladsofronov" className={lnkStyle}>
                <img src="/telegram.svg" alt = "Link to telegram"/>
            </a>
            <a href="https://github.com/narviii" className={lnkStyle}>
                <img src="/github.svg" alt = "Link to github" />
            </a>
            <a href="https://twitter.com/narvi" className={lnkStyle}>
                <img src="/twitter.svg" alt = "Link to twitter" />
            </a>
            <a href="mailto:vlad@sofronov.co" className={lnkStyle}>
                <img src="/email.svg" alt = "Link to email" />
            </a>
            <a href="https://www.linkedin.com/in/vladsofronov/" className={lnkStyle}>
                <img src="/linkedin.svg" alt = "Link to linkedin" />
            </a>
        </div>
    )
}