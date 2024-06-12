import Blogs from '../models/blog.model.js'

const blogController = {
    // get all blogs
    getBlogs: async(req, res)=> {
        //willimplementt
    try {
        const data = await Blogs.find();
        if(data) return res.status(200).json({message: "Data Fetched successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
    },

    getSingleBlog: async(req, res)=> {
        try {
            const post = await Blogs.findById(req.params.id);
            if (!post) return res.status(404).json({error: 'post not found'});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    postBlog: async(req, res)=> {
        try {
            const {title, description} = req.body;
            const newPost = new Blogs({title, description});

            await newPost.save();

        } catch (error) {
            res.status(500).json({ error: err.message });
        }
    },
    deleteBlog: async(req, res)=> {
        try {
            const post = await Blogs.findByIdAndDelete(req.params.id);
            if (!post) return res.status(404).json({ error: 'Post not found' });
            res.json({ message: 'Post deleted' });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    updateBlog: async(req, res) => {
        try {
            const {title, description} = req.body;
            const post = await Blogs.findByIdAndUpdate(
                req.params.id,
                { title, body },
                { new: true }
              );
              if(!post) return res.status(404).json({error: 'Post not found' });
        } catch (error) {
            
        }
    }
}

export default blogController