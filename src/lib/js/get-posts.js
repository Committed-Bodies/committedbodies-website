// Donovan - the problem was the import route as you suspected.
// There is still a problem with this function though.
// In his example site he uses front-matter called slug
// We don't use slug, so we need to get the file path into this posts array

export async function getPosts() {
    const posts = await Object.entries(
      import.meta.globEager('/src/routes/blog/*.md')
    )
      // get post metadata
      .map(([, post]) => post.metadata)
      // sort by date
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  
    return posts

    
  }