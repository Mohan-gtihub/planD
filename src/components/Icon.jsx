import {
  Search, Megaphone, Share2, Hash, PenTool, CalendarCheck, PartyPopper,
  TrendingUp, Users, BarChart3, Target, Camera, Image, Film, LineChart,
  CalendarDays, ListChecks, Star, Sparkles,
} from 'lucide-react'

// Only the icons referenced in the data file are imported, so the bundle
// stays small (tree-shakeable) instead of pulling all of lucide-react.
const map = {
  Search, Megaphone, Share2, Hash, PenTool, CalendarCheck, PartyPopper,
  TrendingUp, Users, BarChart3, Target, Camera, Image, Film, LineChart,
  CalendarDays, ListChecks, Star,
  // aliases used in data
  CameraIcon: Camera,
}

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Sparkles
  return <Cmp {...props} />
}
