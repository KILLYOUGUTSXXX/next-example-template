'use client'

/* eslint-disable react-hooks/rules-of-hooks */
import MenuC from './main.layout'
import { useLynxModel } from '@lynx/model-reg'

export default useLynxModel(MenuC, () => [
  require('@lynx/models/testing.model').default
])
