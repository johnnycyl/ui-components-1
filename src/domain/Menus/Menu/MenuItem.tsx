import React, { Children } from 'react'
import { MenuItemAnchorWrapper, IconWrapper, LoadingIconWrapper } from './style'
import { FontAwesomeIcon } from '../../Icons'

export interface MenuItemProps {
  /** HTML id to use for the menu */
  url?: string
  label: string
  icon?: JSX.Element
  render?: (label: string, iconContent: JSX.Element | null, url?: string) => JSX.Element
  className?: string
  isLoading?: boolean
}

export interface AnchorProps {
  href?: string
}

export class MenuItem extends React.PureComponent<MenuItemProps> {
  get icon (): JSX.Element | null {
    const { icon } = this.props

    if (icon) {
      return (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )
    }
    return null
  }

  get loadingIcon (): JSX.Element | undefined {
    const {
      isLoading
    } = this.props

    if (isLoading) {
      return (
        <LoadingIconWrapper>
          <FontAwesomeIcon
            type='circle-o-notch'
            isSpinning
          />
        </LoadingIconWrapper>
      )
    }
  }

  get component () {
    const {
      render,
      url,
      label
    } = this.props

    if (render) {
      return render(label, this.icon, url)
    }

    return (
      <MenuItemAnchorWrapper href={url}>
        {this.icon}
        {label}
        {this.loadingIcon}
      </MenuItemAnchorWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      children,
      className
    } = this.props

    return (
      <li className={className}>
        {this.component}
        {children}
      </li>
    )
  }
}