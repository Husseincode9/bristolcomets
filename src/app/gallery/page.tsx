export default function GalleryPage() {
  const placeholders = Array.from({ length: 9 }).map((_, i) => i + 1);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Gallery</h1>
      <p className="text-foreground/80">Add your photos to the `public/gallery/` folder to display them here.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {placeholders.map((i) => (
          <div key={i} className="aspect-square rounded-md bg-black/5 dark:bg-white/5 flex items-center justify-center text-foreground/50 text-sm">
            Photo {i}
          </div>
        ))}
      </div>
    </div>
  );
}


