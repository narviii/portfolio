const lnkStyle = "mx-1"

export default function SocialLinks() {
    return (
        <div className="flex">
            <a href="https://t.me/vladsofronov" className={lnkStyle}>
                <img src="/telegram.svg" />
            </a>
            <a href="https://github.com/narviii" className={lnkStyle}>
                <img src="/github.svg" />
            </a>
            <a href="https://twitter.com/narvi" className={lnkStyle}>
                <img src="/twitter.svg" />
            </a>
            <a href="mailto:vlad@sofronov.co" className={lnkStyle}>
                <img src="/email.svg" />
            </a>
            <a href="https://www.linkedin.com/in/vladsofronov/" className={lnkStyle}>
                <img src="/linkedin.svg" />
            </a>
        </div>
    )
}