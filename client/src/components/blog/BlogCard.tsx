import { BlogPost } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          {post.coverImage && (
            <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt.toString()}>
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </time>
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {post.excerpt}
            </p>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
