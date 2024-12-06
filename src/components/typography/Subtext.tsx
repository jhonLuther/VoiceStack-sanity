const Subtext = (props) => {
  return <div className={`text-[#8639f8] text-sm font-bold pt-8 uppercase leading-snug ${props.className}`}>
    {props.children}
  </div>
}

export default Subtext
