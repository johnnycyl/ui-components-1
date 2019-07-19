import React from 'react'

import { Props } from '../../../common/'
import { StyledContentItem } from './style'

interface ILayoutSpacerContentItemProps {
  /** Size of the space between this content item and the next */
  spacingSize?: '3xsmall' | '2xsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge',
  /** Content item */
  content?: JSX.Element | JSX.Element[] | null,
  /** Component context for the content item */
  componentContext?: string
}

interface ILayoutSpacerProps {
  /** Provide an array of items for the content */
  contentItems: ILayoutSpacerContentItemProps[],
  /** Component context for the overall content spacer */
  componentContext?: string
}

class LayoutSpacer extends React.Component<ILayoutSpacerProps> {
  public render (): JSX.Element {
    const {
      contentItems,
      componentContext
    } = this.props

    return (
      <div
        data-component-type={Props.ComponentType.LayoutSpacer}
        data-component-context={componentContext}
      >
        {
          contentItems.map((contentItem, index) => {
            if (!contentItem.content) {
              return null
            }

            return (
              <StyledContentItem
                key={index}
                spacingSize={contentItem.spacingSize}
                data-component-type={Props.ComponentType.LayoutSpacerItem}
                data-component-context={contentItem.componentContext}
              >
                {contentItem.content}
              </StyledContentItem>
            )
          })
        }
      </div>
    )
  }
}

export {
  LayoutSpacer,
  ILayoutSpacerContentItemProps
}
