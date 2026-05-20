// 影评App JavaScript 脚本文件

// ==================== 静态假数据 ====================
const moviesData = [
  {
    id: '1',
    title: '星际穿越',
    poster: 'https://images.unsplash.com/photo-1446776811953-b11895a3ab5d?w=400&h=600&fit=crop',
    rating: 9.4,
    genre: ['科幻', '冒险', '剧情'],
    director: '克里斯托弗·诺兰',
    cast: ['马修·麦康纳', '安妮·海瑟薇', '杰西卡·查斯坦'],
    releaseYear: 2014,
    duration: '169分钟',
    synopsis: '在不久的将来，地球面临着严重的环境危机，粮食短缺，沙尘暴肆虐。前NASA飞行员库珀被选中执行一项穿越虫洞的太空任务，寻找人类新家园的新家园。影片探索了爱、时间与空间的深刻主题，展现了浩瀚宇宙中的人性光辉。',
    comments: [
      {
        id: 'c1',
        username: '科幻迷小王',
        avatar: 'https://i.pravatar.cc/100?img=1',
        rating: 5,
        content: '这是我看过最震撼的科幻电影！诺兰导演将科学与情感完美结合，每次看都有新感悟。',
        date: '2024-01-15'
      },
      {
        id: 'c2',
        username: '电影热爱者',
        avatar: 'https://i.pravatar.cc/100?img=2',
        rating: 5,
        content: '汉斯·季默的配乐简直是神来之笔，配合视觉效果让人起鸡皮疙瘩。',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2',
    title: '盗梦空间',
    poster: 'https://images.unsplash.com/photo-1536440136628-745255d576a?w=400&h=600&fit=crop',
    rating: 9.3,
    genre: ['科幻', '动作', '悬疑'],
    director: '克里斯托弗·诺兰',
    cast: ['莱昂纳多·迪卡普里奥', '约瑟夫·高登-莱维特', '艾伦·佩吉'],
    releaseYear: 2010,
    duration: '148分钟',
    synopsis: '道姆·柯布是一位经验丰富的窃贼，他专门在人们的梦境中进行入侵，从他人的潜意识中盗取珍贵的秘密。他的技能使他成为危险的企业间谍世界的热门人选，但这也让他付出了失去一切的代价。',
    comments: [
      {
        id: 'c3',
        username: '梦境探索者',
        avatar: 'https://i.pravatar.cc/100?img=3',
        rating: 5,
        content: '看完后需要看三遍才能完全理解剧情，但这正是它的魅力所在！',
        date: '2024-01-20'
      }
    ]
  },
  {
    id: '3',
    title: '千与千寻',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
    rating: 9.2,
    genre: ['动画', '奇幻', '冒险'],
    director: '宫崎骏',
    cast: ['柊瑠美', '入野自由', '夏木真理'],
    releaseYear: 2001,
    duration: '125分钟',
    synopsis: '10岁的千寻与父母一起从城里搬到乡下，途中误入一个神灵的世界。父母因贪吃变成了猪，千寻必须在这个神秘世界中寻找拯救父母的方法，并找到回家的路。',
    comments: [
      {
        id: 'c4',
        username: '动画迷',
        avatar: 'https://i.pravatar.cc/100?img=4',
        rating: 5,
        content: '宫崎骏的想象力真是无人能及，每一帧都是艺术品！',
        date: '2024-01-18'
      },
      {
        id: 'c5',
        username: '怀旧党',
        avatar: 'https://i.pravatar.cc/100?img=5',
        rating: 5,
        content: '从小到大看了无数遍，每次都有新的感动。',
        date: '2024-01-12'
      }
    ]
  },
  {
    id: '4',
    title: '肖申克的救赎',
    poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
    rating: 9.7,
    genre: ['剧情', '犯罪'],
    director: '弗兰克·德拉邦特',
    cast: ['蒂姆·罗宾斯', '摩根·弗里曼'],
    releaseYear: 1994,
    duration: '142分钟',
    synopsis: '一场谋杀案使银行家安迪蒙冤入狱，谋杀妻子及其情人的指控将囚禁他终生。在肖申克监狱中，希望似乎虚无缥缈，终身监禁的惩罚无法挽回。但安迪决定用智慧与希望，给监狱带来了意想不到的变化。',
    comments: [
      {
        id: 'c6',
        username: '经典影迷',
        avatar: 'https://i.pravatar.cc/100?img=6',
        rating: 5,
        content: '永远的影史第一，关于希望与自由的赞歌。',
        date: '2024-01-05'
      }
    ]
  },
  {
    id: '5',
    title: '阿甘正传',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
    rating: 9.5,
    genre: ['剧情', '爱情'],
    director: '罗伯特·泽米吉斯',
    cast: ['汤姆·汉克斯', '罗宾·怀特'],
    releaseYear: 1994,
    duration: '142分钟',
    synopsis: '阿甘智商虽然只有75，但他的母亲告诉他，生命就像一盒巧克力，你永远不知道下一颗是什么味道。阿甘经历了美国历史上的诸多重大事件，他的纯真与善良影响了身边的每一个人。',
    comments: []
  },
  {
    id: '6',
    title: '黑暗骑士',
    poster: 'https://images.unsplash.com/photo-1509281425566-9a9e33742cdb?w=400&h=600&fit=crop',
    rating: 9.0,
    genre: ['动作', '犯罪', '剧情'],
    director: '克里斯托弗·诺兰',
    cast: ['克里斯蒂安·贝尔', '希斯·莱杰', '艾伦·艾克哈特'],
    releaseYear: 2008,
    duration: '152分钟',
    synopsis: '蝙蝠侠、戈登警长和新任检察官组成的打击犯罪小组在哥谭市初战告捷，但他们很快发现自己陷入了混乱的统治，被称为小丑的混乱统治。',
    comments: [
      {
        id: 'c7',
        username: '超级英雄粉',
        avatar: 'https://i.pravatar.cc/100?img=7',
        rating: 5,
        content: '希斯·莱杰的小丑是永远的经典！',
        date: '2024-01-22'
      }
    ]
  },
  {
    id: '7',
    title: '泰坦尼克号',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop',
    rating: 9.4,
    genre: ['爱情', '剧情', '灾难'],
    director: '詹姆斯·卡梅隆',
    cast: ['莱昂纳多·迪卡普里奥', '凯特·温斯莱特'],
    releaseYear: 1997,
    duration: '194分钟',
    synopsis: '1912年，豪华客轮泰坦尼克号开始了她的处女航，从英国驶向美国纽约。贵族少女露丝与穷画家杰克不顾门第悬殊，坠入爱河。然而，一场巨大的灾难正在等待着他们。',
    comments: [
      {
        id: 'c8',
        username: '浪漫主义者',
        avatar: 'https://i.pravatar.cc/100?img=8',
        rating: 5,
        content: '每次看都会哭，经典永垂不朽。',
        date: '2024-01-08'
      }
    ]
  },
  {
    id: '8',
    title: '疯狂动物城',
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f8472c?w=400&h=600&fit=crop',
    rating: 8.6,
    genre: ['动画', '冒险', '喜剧'],
    director: '拜伦·霍华德',
    cast: ['金妮弗·古德温', '杰森·贝特曼'],
    releaseYear: 2016,
    duration: '108分钟',
    synopsis: '在一个所有动物和平共处的现代动物都市，兔子朱迪实现了她儿时的梦想，成为了动物警察局的第一只兔子警官。',
    comments: []
  },
  {
    id: '9',
    title: '寄生虫',
    poster: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=400&h=600&fit=crop',
    rating: 8.6,
    genre: ['剧情', '喜剧', '惊悚'],
    director: '奉俊昊',
    cast: ['宋康昊', '李善均', '赵茹珍'],
    releaseYear: 2019,
    duration: '132分钟',
    synopsis: '基泽一家四口都是无业游民，住在阴暗狭小的地下室。机缘巧合下，长子基宇获得了一份高薪家教工作，自此一家人的命运开始了戏剧性的转变。',
    comments: []
  },
  {
    id: '10',
    title: '复仇者联盟4：终局之战',
    poster: 'https://images.unsplash.com/photo-1635809027769-b00d750a6bac?w=400&h=600&fit=crop',
    rating: 8.5,
    genre: ['动作', '科幻', '冒险'],
    director: '安东尼·罗素',
    cast: ['小罗伯特·唐尼', '克里斯·埃文斯', '克里斯·海姆斯沃斯'],
    releaseYear: 2019,
    duration: '181分钟',
    synopsis: '在灭霸打了响指之后，世界陷入了混乱。复仇者们必须承担起拯救世界的重任，与灭霸展开终极对决。',
    comments: []
  },
  {
    id: '11',
    title: '寻梦环游记',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
    rating: 9.1,
    genre: ['动画', '奇幻', '音乐'],
    director: '李·昂克里奇',
    cast: ['安东尼·冈萨雷斯', '盖尔·加西亚·贝纳尔'],
    releaseYear: 2017,
    duration: '105分钟',
    synopsis: '12岁的米格尔梦想成为一名音乐家，但他的家族却世代禁止音乐。在亡灵节这天，米格尔意外进入了亡灵的世界，展开了一段奇妙的旅程。',
    comments: [
      {
        id: 'c9',
        username: '皮克斯粉',
        avatar: 'https://i.pravatar.cc/100?img=9',
        rating: 5,
        content: '关于家庭与梦想的完美诠释，感动到哭。',
        date: '2024-01-25'
      }
    ]
  },
  {
    id: '12',
    title: '当幸福来敲门',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
    rating: 9.1,
    genre: ['剧情', '传记'],
    director: '加布里尔·穆奇诺',
    cast: ['威尔·史密斯', '贾登·史密斯'],
    releaseYear: 2006,
    duration: '117分钟',
    synopsis: '克里斯·加德纳是一个勤奋聪明的医疗器械销售员，但他一直无法赚到足够的钱。在妻子离开后，他独自带着儿子，追求更好的生活。',
    comments: []
  }
];

// ==================== 工具函数 ====================

/**
 * 生成星级评分HTML
 * @param {number} rating - 评分 (0-10)
 * @param {boolean} editable - 是否可编辑
 * @returns {string} HTML字符串
 */
function generateStars(rating, editable = false) {
  const stars = Math.round(rating) / 2;
  let html = '';
  
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      html += '<span class="star filled">★</span>';
    } else if (i - 0.5 <= stars) {
      html += '<span class="star half">★</span>';
    } else {
      html += '<span class="star">★</span>';
    }
  }
  
  return html;
}

/**
 * 生成可编辑的星级评分
 * @param {number} currentRating - 当前评分
 * @returns {string} HTML字符串
 */
function generateEditableStars(currentRating = 0) {
  const stars = Math.round(currentRating);
  let html = '';
  
  for (let i = 1; i <= 5; i++) {
    const filled = i <= stars ? 'filled' : '';
    html += `<span class="star ${filled}" data-rating="${i}">★</span>`;
  }
  
  return html;
}

/**
 * 生成电影卡片HTML
 * @param {Object} movie - 电影对象
 * @returns {string} HTML字符串
 */
function generateMovieCard(movie) {
  return `
    <div class="movie-card" data-movie-id="${movie.id}">
      <div class="movie-poster-container">
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        <div class="movie-rating-badge">
          <span class="star">★</span>
          <span>${movie.rating}</span>
        </div>
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          ${movie.genre.slice(0, 2).map(g => `<span class="movie-genre">${g}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/**
 * 生成评论卡片HTML
 * @param {Object} comment - 评论对象
 * @returns {string} HTML字符串
 */
function generateCommentCard(comment) {
  return `
    <div class="comment-card">
      <div class="comment-header">
        <div class="comment-author">
          <img src="${comment.avatar}" alt="${comment.username}" class="comment-avatar">
          <div class="comment-author-info">
            <span class="comment-username">${comment.username}</span>
            <span class="comment-date">${comment.date}</span>
          </div>
        </div>
        <div class="comment-rating">
          <div class="star-rating">${generateStars(comment.rating * 2)}</div>
        </div>
      </div>
      <p class="comment-content">${comment.content}</p>
    </div>
  `;
}

/**
 * 从URL获取查询参数
 * @param {string} name - 参数名
 * @returns {string|null} 参数值
 */
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

/**
 * 根据ID查找电影
 * @param {string} id - 电影ID
 * @returns {Object|null} 电影对象
 */
function findMovieById(id) {
  return moviesData.find(movie => movie.id === id);
}

// ==================== 首页功能 ====================

/**
 * 渲染电影列表
 * @param {Array} movies - 电影数组
 */
function renderMovies(movies) {
  const container = document.getElementById('moviesGrid');
  if (!container) return;
  
  if (movies.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="empty-state-icon">🎬</div>
        <p class="empty-state-text">没有找到相关电影</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = movies.map(movie => generateMovieCard(movie)).join('');
  
  // 添加点击事件
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => {
      const movieId = card.dataset.movieId;
      window.location.href = `detail.html?id=${movieId}`;
    });
  });
}

/**
 * 搜索电影
 * @param {string} query - 搜索关键词
 */
function searchMovies(query) {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    renderMovies(moviesData);
    return;
  }
  
  const filteredMovies = moviesData.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.genre.some(g => g.toLowerCase().includes(searchTerm)) ||
    movie.director.toLowerCase().includes(searchTerm)
  );
  
  renderMovies(filteredMovies);
}

// ==================== 详情页功能 ====================

/**
 * 渲染电影详情
 * @param {Object} movie - 电影对象
 */
function renderMovieDetail(movie) {
  if (!movie) {
    document.getElementById('movieDetail').innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎬</div>
        <p class="empty-state-text">电影未找到</p>
        <a href="index.html" class="back-button" style="margin-top: 1rem; display: inline-block;">← 返回首页</a>
      </div>
    `;
    return;
  }
  
  document.getElementById('movieDetail').innerHTML = `
    <a href="index.html" class="back-button">
      <span>←</span> 返回首页
    </a>
    
    <div class="movie-detail-hero">
      <img src="${movie.poster}" alt="${movie.title}" class="detail-poster">
      <div class="detail-info">
        <div class="detail-header">
          <h1 class="detail-title">${movie.title}</h1>
          <div class="detail-meta-row">
            <span class="detail-meta-item">📅 ${movie.releaseYear}</span>
            <span class="detail-meta-item">⏱ ${movie.duration}</span>
          </div>
        </div>
        
        <div class="detail-rating">
          <span class="rating-value">${movie.rating}</span>
          <div>
            <div class="star-rating">${generateStars(movie.rating)}</div>
            <span class="rating-label">${movie.comments.length} 条影评</span>
          </div>
        </div>
        
        <div class="detail-genres">
          ${movie.genre.map(g => `<span class="detail-genre">${g}</span>`).join('')}
        </div>
        
        <div class="detail-section">
          <h3 class="detail-section-title">剧情简介</h3>
          <p class="detail-synopsis">${movie.synopsis}</p>
        </div>
        
        <div class="detail-section">
          <h3 class="detail-section-title">演职员表</h3>
          <div class="detail-credits">
            <div class="credit-item">
              <span class="credit-label">导演</span>
              <span class="credit-value">${movie.director}</span>
            </div>
            <div class="credit-item">
              <span class="credit-label">主演</span>
              <span class="credit-value">${movie.cast.join('、')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="comments-section">
      <div class="comments-header">
        <h2 class="comments-title">影评</h2>
        <span class="comments-count">${movie.comments.length} 条</span>
      </div>
      
      <div class="comment-form">
        <h3 class="comment-form-title">写下你的影评</h3>
        <form id="commentForm">
          <div class="form-group">
            <label class="form-label">你的昵称</label>
            <input type="text" class="form-input" id="usernameInput" placeholder="输入昵称" required>
          </div>
          <div class="form-group">
            <label class="form-label">评分</label>
            <div class="rating-input-group">
              <div class="star-rating editable" id="ratingStars">
                ${generateEditableStars(0)}
              </div>
              <span class="rating-label" id="ratingText">点击星星评分</span>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">影评内容</label>
            <textarea class="form-textarea" id="commentInput" placeholder="分享你的观影感受..." required></textarea>
          </div>
          <button type="submit" class="submit-button">
            <span>✓</span> 发布影评
          </button>
        </form>
      </div>
      
      <div class="comments-list" id="commentsList">
        ${movie.comments.length > 0 
          ? movie.comments.map(comment => generateCommentCard(comment)).join('')
          : '<div class="empty-state"><div class="empty-state-icon">💬</div><p class="empty-state-text">还没有影评，来抢沙发吧！</p></div>'
        }
      </div>
    </div>
  `;
  
  setupCommentForm(movie);
}

/**
 * 设置评论表单
 * @param {Object} movie - 电影对象
 */
function setupCommentForm(movie) {
  let selectedRating = 0;
  
  const starsContainer = document.getElementById('ratingStars');
  const ratingText = document.getElementById('ratingText');
  const commentForm = document.getElementById('commentForm');
  const commentsList = document.getElementById('commentsList');
  
  if (!starsContainer || !ratingText || !commentForm) return;
  
  // 星级点击事件
  starsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
      selectedRating = parseInt(e.target.dataset.rating);
      
      starsContainer.querySelectorAll('.star').forEach((star, index) => {
        if (index < selectedRating) {
          star.classList.add('filled');
        } else {
          star.classList.remove('filled');
        }
      });
      
      ratingText.textContent = `${selectedRating} 星`;
    }
  });
  
  // 星级悬停效果
  starsContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('star')) {
      const hoverRating = parseInt(e.target.dataset.rating);
      starsContainer.querySelectorAll('.star').forEach((star, index) => {
        if (index < hoverRating) {
          star.classList.add('filled');
        } else {
          star.classList.remove('filled');
        }
      });
    }
  });
  
  starsContainer.addEventListener('mouseleave', () => {
    starsContainer.querySelectorAll('.star').forEach((star, index) => {
      if (index < selectedRating) {
        star.classList.add('filled');
      } else {
        star.classList.remove('filled');
      }
    });
  });
  
  // 表单提交
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('usernameInput').value.trim();
    const content = document.getElementById('commentInput').value.trim();
    
    if (!username || !content) {
      alert('请填写昵称和影评内容！');
      return;
    }
    
    if (selectedRating === 0) {
      alert('请选择评分！');
      return;
    }
    
    const newComment = {
      id: `c${Date.now()}`,
      username: username,
      avatar: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70) + 10}`,
      rating: selectedRating,
      content: content,
      date: new Date().toISOString().split('T')[0]
    };
    
    movie.comments.unshift(newComment);
    
    if (commentsList.innerHTML.includes('还没有影评')) {
      commentsList.innerHTML = generateCommentCard(newComment);
    } else {
      commentsList.innerHTML = generateCommentCard(newComment) + commentsList.innerHTML;
    }
    
    document.querySelector('.comments-count').textContent = `${movie.comments.length} 条`;
    
    commentForm.reset();
    selectedRating = 0;
    starsContainer.querySelectorAll('.star').forEach(star => star.classList.remove('filled'));
    ratingText.textContent = '点击星星评分';
    
    alert('影评发布成功！');
  });
}

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  
  if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
    renderMovies(moviesData);
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchMovies(e.target.value);
      });
    }
  } else if (path.includes('detail.html')) {
    const movieId = getQueryParam('id');
    const movie = findMovieById(movieId);
    renderMovieDetail(movie);
  }
});
