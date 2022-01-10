export async function getPosts() {
    const posts = await Object.entries(
      import.meta.globEager('/blog/*.md')
    )
      // get post metadata
      .map(([, post]) => post.metadata)
      // sort by date
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  
    return posts

    
  }