/**
 * This file houses all non-addon related decorators
 */
import React from 'react'
import { DecoratorFn } from '@storybook/react'

export const withRouter: DecoratorFn = (StoryFn, { parameters: { deeplink } }) => {
  return (
    <>
      oi!
      <StoryFn />
    </>
  )
}

// ordered from innermost to outermost, be careful with the order!
export const globalDecorators = [withRouter]
