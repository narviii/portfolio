import Pill from "./pill"
export default function Card({ title, link, about, github, stack }) {
    return (
        <article className="flex flex-col border border-white/25  p-4 rounded-xl my-4">
            <div className="flex mb-4">
                <a href={link}>
                    <h3 className="text-amber-500 text-2xl">
                        {title}
                    </h3>
                </a>
                {github != "" ? <a href={github}> <img className="ml-2" src="/github.svg" /> </a> : null}

            </div>
            <p className="text-gray-300">
                {about}
            </p>
            <div className="my-1 flex flex-wrap">
                {stack.map(item => <Pill title={item} />)}
            </div>
        </article>

    )
}