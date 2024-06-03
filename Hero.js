export default function Hero({ content }) {
    return (
      <div className="flex flex-col items-center text-center py-10 bg-gray-100 md:flex-row md:justify-between">
        <h1 className="text-4xl font-bold">{content.headline}</h1>
        <p className="mt-4 text-lg">{content.subheadline}</p>
        <div className="mt-6">
          {content.ctaButtons.map((button, index) => (
            <a key={index} href={button.link} className="btn-primary">
              {button.text}
            </a>
          ))}
        </div>
      </div>
    );
  }
  