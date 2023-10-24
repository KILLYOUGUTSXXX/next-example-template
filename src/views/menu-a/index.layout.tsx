'use client'

/* eslint-disable react-hooks/rules-of-hooks */
import MenuA from './main.layout'
import { useLynxModel } from '@lynx/model-reg'

export default useLynxModel(MenuA, () => [
  require('@lynx/models/testing.model').default
])
