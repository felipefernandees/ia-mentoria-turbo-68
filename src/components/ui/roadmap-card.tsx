"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
}

export function RoadmapCard({
  title = "Product Roadmap",
  description = "Upcoming features and releases",
  items,
}: RoadmapCardProps) {
  return (
    <Card className="w-full max-w-4xl shadow-xl hover:shadow-lg transiton-all duration-300">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-4 h-px bg-border" />

            <div className="flex justify-between">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pt-8 text-center w-1/4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full flex items-center justify-center ${
                      item.status === "done" || item.status === "in-progress"
                        ? "bg-primary"
                        : "bg-muted"
                    }`}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-background" />
                  </motion.div>

                  {/* Quarter */}
                  <Badge
                    variant={
                      item.status === "done" || item.status === "in-progress"
                        ? "default"
                        : "outline"
                    }
                    className="mb-1 text-[11px]"
                  >
                    {item.quarter}
                  </Badge>

                  {/* Title + Description */}
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="block md:hidden space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                {/* Vertical Timeline Line */}
                {index !== items.length - 1 && (
                  <div className="absolute left-3 top-4 w-px h-full bg-border" />
                )}

                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-1 top-2 h-4 w-4 rounded-full flex items-center justify-center ${
                    item.status === "done" || item.status === "in-progress"
                      ? "bg-primary"
                      : "bg-muted"
                  }`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-background" />
                </motion.div>

                {/* Content */}
                <div>
                  <Badge
                    variant={
                      item.status === "done" || item.status === "in-progress"
                        ? "default"
                        : "outline"
                    }
                    className="mb-2 text-[11px]"
                  >
                    {item.quarter}
                  </Badge>
                  <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}