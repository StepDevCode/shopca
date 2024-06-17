import './title.scss'

export const Title = (props) => {
  const { children } = props

  return <h4 className="title">{children}</h4>
}
