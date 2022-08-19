import styles from './Quote.module.scss'
import { useQuote } from '../app/hooks'
import gitHubLogo from '../assets/GitHub_Logo.png'

export default function Quote() {
  const { quote } = useQuote()  

  const backgroundStyle = {
    backgroundColor: quote.data.color,
    transition: 'background-color .3s linear'
  }

  const colorStyle = {
    color: quote.data.color,
    transition: 'color .3s linear'
  }

  return (
    <div className={styles.container} style={backgroundStyle}>
      <a className={styles.githubLink} href="https://github.com/pavelgorbach/quotemachine" target="blank" rel="noopener noreferrer">
        <img src={gitHubLogo} className={styles.githubLogo} alt="GitHub" />
      </a>

      <h1 className={styles.title}>Quote Machine</h1>
   
      {!quote.fetching && (
        <div className={[styles.quote, styles.fadeIn].join(' ')} id="quote-box">
          <div>
            <div className={styles.text} id="text"><q>{quote.data.content}</q></div>
            <div className={styles.author} id="author">- {quote.data.author}</div>
          </div>

          <div className={styles.footer}>
            <a
              id="tweet-quote"
              className={styles.tweetQuote}
              style={colorStyle}
              href="https://twitter.com/intent/tweet"
              target="blank">
                Tweet
            </a>

            <button
              id="new-quote"
              className={styles.newQuote}
              style={backgroundStyle}
              disabled={quote.fetching}
              onClick={quote.getNew}>
                New quote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
