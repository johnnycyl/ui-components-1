import React from 'react'

import { Avatar } from '../'
import { Props, Variables } from '../../../common'
import { AvatarStatusDotColor } from '../Avatar'
import {
  AvatarContainer,
  AvatarEntityInfo,
  AvatarEntityWrapper,
  PrimaryTextWrapper,
  SecondaryTextWrapper,
  TertiaryTextWrapper
} from './style'

export interface IAvatarEntityProps {
  /** The primary text */
  primaryText: string
  /** The secondary text */
  secondaryText?: string
  /** The tertiary text */
  tertiaryText?: string
  /** If true, displays AvatarEntity in a compact view */
  isCompact?: boolean
  /** If true, will display a hover state style when hovered */
  isHoverable?: boolean
  /** The primary text type  */
  primaryTextType?: Props.TypographyType
  /** The secondary text type  */
  secondaryTextType?: Props.TypographyType
  /** The tertiary text type  */
  tertiaryTextType?: Props.TypographyType
  /** Specify the primary text font weight */
  primaryWeight?: Variables.FontWeight
  /** Specify the secondary text font weight */
  secondaryWeight?: Variables.FontWeight
  /** Color of the primary text */
  primaryColor?: Variables.Color
  /** Color of the secondary text */
  secondaryColor?: Variables.Color
  /** Margins around the component */
  margins?: Props.IMargins
  /** Initials to display if no valid `imageUrl` or `imageData` is passed to Avatar */
  initials?: string
  /** Image URL */
  imageUrl?: string
  /** Display a coloured status dot on the avatar */
  statusDot?: AvatarStatusDotColor | 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight' | 'dark'
  /** Display an icon component on the avatar */
  statusIcon?: JSX.Element
}

export class AvatarEntity extends React.PureComponent<IAvatarEntityProps> {
  public static defaultProps: Partial<IAvatarEntityProps> = {
    isCompact: false,
    isHoverable: false,
    primaryTextType: Props.TypographyType.Body,
    secondaryTextType: Props.TypographyType.Small,
    tertiaryTextType: Props.TypographyType.XSmall,
    primaryWeight: Variables.FontWeight.fwNormal,
    secondaryWeight: Variables.FontWeight.fwNormal,
    primaryColor: Variables.Color.n800,
    secondaryColor: Variables.Color.n700,
    margins: {
      top: Variables.Spacing.s3XSmall,
      bottom: Variables.Spacing.s3XSmall,
      left: Variables.Spacing.s3XSmall,
      right: Variables.Spacing.s3XSmall
    }
  }

  get avatar (): JSX.Element {
    const {
      initials,
      imageUrl,
      statusDot,
      statusIcon,
      isCompact
    } = this.props

    return (
      <AvatarContainer>
        <Avatar
          initials={initials}
          imageUrl={imageUrl}
          statusDot={statusDot}
          statusIcon={statusIcon}
          size={isCompact ? Props.AvatarSize.Small : Props.AvatarSize.Medium}
        />
      </AvatarContainer>
    )
  }

  get primaryText (): JSX.Element {
    const {
      primaryText,
      isCompact,
      primaryTextType,
      primaryColor,
      primaryWeight
    } = this.props

    return (
      <PrimaryTextWrapper
        textType={primaryTextType!}
        isCompact={isCompact}
        primaryColor={primaryColor!}
        primaryWeight={primaryWeight!}
      >
        {primaryText}
      </PrimaryTextWrapper>
    )
  }

  get secondaryText (): JSX.Element | null {
    const {
      secondaryText,
      isCompact,
      secondaryTextType,
      secondaryColor,
      secondaryWeight
    } = this.props

    if (!secondaryText) {
      return null
    }

    let text = secondaryText

    if (isCompact) {
      text = `(${text})`
    }

    return (
      <SecondaryTextWrapper
        textType={secondaryTextType!}
        isCompact={isCompact}
        secondaryColor={secondaryColor!}
        secondaryWeight={secondaryWeight!}
      >
        {text}
      </SecondaryTextWrapper>
    )
  }

  get tertiaryText (): JSX.Element | null {
    const {
      tertiaryText,
      isCompact,
      tertiaryTextType
    } = this.props

    if (!tertiaryText || isCompact) {
      return null
    }

    return (
        <TertiaryTextWrapper
          textType={tertiaryTextType!}
          isCompact={isCompact}
        >
          {tertiaryText}
        </TertiaryTextWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      isHoverable,
      margins
    } = this.props

    return (
      <AvatarEntityWrapper
        className='avatar-entity'
        isHoverable={isHoverable}
        margins={margins}
      >
        {this.avatar}
        <AvatarEntityInfo>
          {this.primaryText}
          {this.secondaryText}
          {this.tertiaryText}
        </AvatarEntityInfo>
      </AvatarEntityWrapper>
    )
  }
}
