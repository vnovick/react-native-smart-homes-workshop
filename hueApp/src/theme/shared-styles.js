import { colors, spacing } from './';
import { Platform } from 'react-native';
 
export const SCREEN = 
{ 
  flex: 1,
  backgroundColor: colors.background
}

export const CONTAINER = {
  backgroundColor: colors.transparent,
  paddingHorizontal: spacing[4],
}

export const TEXT = {
  color: colors.primary,
  fontFamily: "Montserrat"
}

export const BOLD = { fontWeight: "bold" }

export const HEADER = {
  paddingTop: Platform.select({
    ios: 30,
    android: 30 
  }),
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}

export const HEADER_TITLE = { 
  ...TEXT,
  ...BOLD,
  fontSize: 15,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

export const TITLE_WRAPPER = { 
  ...TEXT,
  textAlign: "center",
}

export const TITLE = { 
  ...TEXT, 
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}

export const ROW = {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
}