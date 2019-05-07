var PostViewTracker = function(latestPostId, photoCount) {
    var self = this;
    self.latestPostId = latestPostId;
    self.photoCount = photoCount;
    self.key = 'lastPostSeen';

    var updateLastPostSeen = function() {
        var post = {
            id: self.latestPostId,
            photoCount: self.photoCount
        };
        localStorage.setItem(self.key, JSON.stringify(post));
    }

    var getLastPostSeen = function() {
        var post = localStorage.getItem(self.key);
        if(post == null) return null;
        return JSON.parse(post);
    }

    var hasSeenLatestPost = function() {
        var post = getLastPostSeen();
        return post != null && post.id == self.latestPostId;
    }

    var hasSeenAllLatestPostPhotos = function() {
        var post = getLastPostSeen();
        return hasSeenLatestPost() && post.photoCount == self.photoCount;
    }

    return {
        hasSeenAllLatestPostPhotos: hasSeenAllLatestPostPhotos,
        updateLastPostSeen: updateLastPostSeen
    }
}