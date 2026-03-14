import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";

import { Card } from "../components/ui/card";

export function SavedPosts() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Saved Posts</h1>
        <p className="text-gray-400">Your bookmarked content</p>
      </motion.div>

      {/* Empty State */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-12 text-center">

          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Bookmark className="w-8 h-8 text-purple-400" />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            No saved posts yet
          </h3>

          <p className="text-gray-400">
            Start saving posts to access them later.
          </p>

        </Card>
      </motion.div>

    </div>
  );
}