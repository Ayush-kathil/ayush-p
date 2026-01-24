# Project Images Guide

1. **Paste your images here**: Save your project preview images in this
   `public/images` folder.
2. **Open `src/data/projects.ts`**:
3. **Update the `images` array**: For each project, update the `images` property
   with the path to your file.

   Example: If you save an image as `my-awesome-project.png` in this folder.

   In `src/data/projects.ts`:
   ```typescript
   {
      title: "My Awesome Project",
      // ...
      images: ["/images/my-awesome-project.png"]
   }
   ```

4. **Profile Photo**: Replace `me.jpg` (if it exists) or add your photo as
   `me.jpg` to see it in the About section.
