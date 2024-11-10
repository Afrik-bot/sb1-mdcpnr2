import { useState } from 'react';
import { UserCircleIcon, ChatBubbleLeftIcon, UserGroupIcon, MagnifyingGlassIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import LeaderRanking from '../components/LeaderRanking';
import { leaders } from '../data/leaders';

const friends = [
  {
    id: '1',
    name: 'Sarah Johnson',
    username: '@sarahj',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    isOnline: true,
    isVerified: true
  },
  {
    id: '2',
    name: 'David Okafor',
    username: '@davidok',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    isOnline: true,
    isVerified: false
  },
  {
    id: '3',
    name: 'Amina Mohammed',
    username: '@aminam',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amina',
    isOnline: false,
    isVerified: true
  }
];

const communities = [
  {
    id: '1',
    name: 'African Tech Hub',
    members: '12.4K',
    description: 'A community for African tech enthusiasts and professionals',
    image: 'https://api.dicebear.com/7.x/identicon/svg?seed=tech',
    category: 'Technology',
    featuredVideos: [
      {
        id: 'tech-1',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=tech1',
        title: 'Inside Africa\'s Largest Tech Hub',
        views: '45K',
        duration: '3:45'
      },
      {
        id: 'tech-2',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=tech2',
        title: 'African Startups Rising',
        views: '32K',
        duration: '5:20'
      }
    ]
  },
  {
    id: '2',
    name: 'Afrobeats Connect',
    members: '45.2K',
    description: 'Share and discover African music',
    image: 'https://api.dicebear.com/7.x/identicon/svg?seed=music',
    category: 'Music',
    featuredVideos: [
      {
        id: 'music-1',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=music1',
        title: 'Traditional Drumming Performance',
        views: '78K',
        duration: '4:15'
      },
      {
        id: 'music-2',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=music2',
        title: 'Modern African Fusion',
        views: '92K',
        duration: '3:50'
      }
    ]
  },
  {
    id: '3',
    name: 'African Cuisine',
    members: '28.7K',
    description: 'Explore traditional and modern African recipes',
    image: 'https://api.dicebear.com/7.x/identicon/svg?seed=food',
    category: 'Food',
    featuredVideos: [
      {
        id: 'food-1',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=food1',
        title: 'Making Perfect Jollof Rice',
        views: '56K',
        duration: '8:30'
      },
      {
        id: 'food-2',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=food2',
        title: 'Street Food Tour: Lagos',
        views: '43K',
        duration: '12:45'
      }
    ]
  },
  {
    id: '4',
    name: 'African Politics',
    members: '34.2K',
    description: 'Discuss and analyze African political developments',
    image: 'https://api.dicebear.com/7.x/identicon/svg?seed=politics',
    category: 'Politics',
    featuredVideos: [
      {
        id: 'politics-1',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=politics1',
        title: 'Understanding AU Agenda 2063',
        views: '34K',
        duration: '15:20'
      },
      {
        id: 'politics-2',
        thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=politics2',
        title: 'Democracy in Africa: Key Milestones',
        views: '28K',
        duration: '18:45'
      }
    ]
  }
];

type Tab = 'friends' | 'communities' | 'politics';

export default function Connect() {
  const [activeTab, setActiveTab] = useState<Tab>('friends');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      <div className="max-w-4xl mx-auto p-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-1 mb-6 bg-gray-900/50 backdrop-blur-sm rounded-xl">
          <button
            onClick={() => setActiveTab('friends')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'friends' 
                ? 'bg-purple-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <UserCircleIcon className="w-5 h-5" />
            Friends
          </button>
          <button
            onClick={() => setActiveTab('communities')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'communities' 
                ? 'bg-purple-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <UserGroupIcon className="w-5 h-5" />
            Communities
          </button>
          <button
            onClick={() => setActiveTab('politics')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'politics' 
                ? 'bg-purple-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <UserGroupIcon className="w-5 h-5" />
            Politics
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {activeTab === 'friends' && (
            <div className="grid gap-4">
              {friends.map((friend) => (
                <div 
                  key={friend.id} 
                  className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-purple-500/30 transition-colors duration-200"
                >
                  <div className="relative">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-12 h-12 rounded-full bg-gray-800"
                    />
                    {friend.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium">{friend.name}</h3>
                      {friend.isVerified && (
                        <CheckBadgeIcon className="w-4 h-4 text-purple-500" />
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{friend.username}</p>
                  </div>
                  
                  <button className="p-2 text-purple-500 hover:bg-purple-500/10 rounded-lg transition-colors">
                    <ChatBubbleLeftIcon className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'communities' && (
            <div className="grid gap-6">
              {communities.map((community) => (
                <div 
                  key={community.id} 
                  className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-purple-500/30 transition-colors duration-200"
                >
                  <div className="relative h-48">
                    <img
                      src={community.image}
                      alt={community.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-xs text-purple-300">
                      {community.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium text-white">{community.name}</h3>
                      <span className="text-sm text-gray-400">{community.members} members</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">{community.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Featured Videos</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {community.featuredVideos.map((video) => (
                          <div key={video.id} className="group relative">
                            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <VideoCameraIcon className="w-8 h-8 text-white" />
                              </div>
                              <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white">
                                {video.duration}
                              </span>
                            </div>
                            <h5 className="mt-2 text-sm font-medium text-white line-clamp-1">{video.title}</h5>
                            <p className="text-xs text-gray-400">{video.views} views</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors">
                      Join Community
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'politics' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">African Leaders Weekly Ranking</h2>
                <p className="text-gray-400">Based on approval ratings and policy impact</p>
              </div>
              <div className="grid gap-6">
                {leaders.map((leader) => (
                  <LeaderRanking key={leader.id} leader={leader} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}