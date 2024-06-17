import { Title } from '../../../shared/ui/title'

import './categoryPreview.scss'

export const CategoryPreview = (props) => {
  const { title, children } = props
  return (
    <div className="category-preview">
      <Title>{title}</Title>
      {children}
    </div>
  )
}
