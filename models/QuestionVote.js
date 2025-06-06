const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const QuestionVote = sequelize.define('QuestionVote', {
  vote_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'questions',
      key: 'question_id'
    },
    onDelete: 'CASCADE'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'user_id'
    },
    onDelete: 'CASCADE'
  },
  vote_type: {
    type: DataTypes.ENUM('upvote', 'downvote'),
    allowNull: false
  }
}, {
  tableName: 'question_votes',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
  indexes: [
    {
      unique: true,
      fields: ['question_id', 'user_id']
    }
  ]
});

module.exports = QuestionVote; 