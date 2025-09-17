import type React from "react"
import { Clock, Leaf, Shield, Paintbrush, DollarSign, Cpu, HardHat, Cloud, Maximize, Heart } from "lucide-react"

export interface modularDProps {
  id: number
  title: string
  text: string
  icon: React.ElementType
}

export const modularData: modularDProps[] = [
  {
    id: 1,
    title: "Accelerated Project Timelines",
    text: "-Majority of construction work completed in controlled factory environment ,-Faster project completion,-Minimized on-site disruptions",
    icon: Clock,
  },
  {
    id: 2,
    title: "Sustainability",
    text: "-Optimized resource utilization ,-Reduced construction waste, -Enhanced energy efficiency,",
    icon: Leaf,
  },
  {
    id: 3,
    title: "High-Quality Construction",
    text: "-Stringent quality control measures in factory settings,-Meeting or exceeding building standards, -Durable and resilient structures",
    icon: Shield,
  },
  {
    id: 4,
    title: "Customization and Design Flexibility",
    text: "-Versatile design options to meet various project requirements,-Flexible configurations to accommodate diverse needs ",
    icon: Paintbrush,
  },
  {
    id: 5,
    title: "Cost-Effectiveness",
    text: "-Reduced overall project costs ,-Optimal resource allocation and management ",
    icon: DollarSign,
  },
  {
    id: 6,
    title: "Innovative Technology Integration",
    text: "-Incorporation of cutting-edge technology for enhanced efficiency ,-Integration of smart building systems",
    icon: Cpu,
  },
  {
    id: 7,
    title: "Improved Safety",
    text: "-Controlled environment minimizes on-site hazards ,-Enhanced worker safety and well-being ",
    icon: HardHat,
  },
  {
    id: 8,
    title: "Resilience to Weather Conditions",
    text: "-Reduced weather-related delays and disruptions ,-Greater consistency in construction quality",
    icon: Cloud,
  },
  {
    id: 9,
    title: "Scalability and Flexibility",
    text: "-Easy expansion or reconfiguration of modular buildings ,-Faster project completion,-Minimized on-site disruptions",
    icon: Maximize,
  },
  {
    id: 10,
    title: "Customer Satisfaction",
    text: "-Meeting or exceeding client expectations ,-Enhanced user experience and comfort",
    icon: Heart,
  },
]

