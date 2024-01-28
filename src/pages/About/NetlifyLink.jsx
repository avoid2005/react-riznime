export default function NetlifyLink() {
  return (
    <a
      href="https://riznime.netlify.app/"
      className="flex items-center px-4 py-3 max-w-[200px] rounded-md active:bg-grayWhite md:hover:bg-slate-600 duration-300 my-2"
    >
      <span className="text-[#00C7B7] fill-current mr-2 w-6">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Netlify</title>
          <path d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z" />
        </svg>
      </span>
      <span>Lihat di Netlify</span>
    </a>
  )
}
