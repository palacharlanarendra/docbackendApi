let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = new Schema(
  {
    body: { type: String, required: true },
    articleId: { type: Schema.Types.ObjectId, ref: 'Article' },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    nestedComments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

commentSchema.methods.displayComment = function (id = null) {
  return {
    id: this.id,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    author: this.author.displayUser(id),
    nestedComments: this.populate(nestedComments),
  };
};

module.exports = mongoose.model('Comment', commentSchema);
