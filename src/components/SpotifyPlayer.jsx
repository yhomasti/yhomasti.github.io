import { useState, useEffect } from 'react';

function SpotifyPlayer() {
  const [trackData, setTrackData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // NEW - track progress

  //format time from milliseconds to MM:SS
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  //fetch current track
  const fetchCurrentTrack = async () => {
    try {
      const response = await fetch('/.netlify/functions/spotify?action=current-track');
      const data = await response.json();

      if (data.needsAuth) {
        setIsOffline(true);
        setLoading(false);
        return;
      }

      if (data.track) {
        setTrackData(data.track);
        setIsPlaying(data.isPlaying);
        setProgress(data.progress_ms || 0); // NEW - set progress
        setIsOffline(false);
        setLoading(false);
      } else {
        setIsOffline(true);
        setLoading(false);
      }
    } catch (error) {
      console.log('spotify api error:', error);
      setIsOffline(true);
      setLoading(false);
    }
  };

  //fetch on mount and every 5 seconds
  useEffect(() => {
    fetchCurrentTrack();
    const interval = setInterval(fetchCurrentTrack, 5000);
    return () => clearInterval(interval);
  }, []);

  // NEW - Calculate progress percentage
  const progressPercent = trackData?.duration_ms 
    ? (progress / trackData.duration_ms) * 100 
    : 0;

  return (
    <div className="spotify-tooltip" id="spotify-tooltip">
      {loading && (
        <div className="spotify-loading">
          <div className="music-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <span>Thomas is currently listening to...</span>
        </div>
      )}

      {!loading && trackData && !isOffline && (
        <div className="spotify-content" style={{ display: 'flex' }}>
          <div className="album-art">
            <img src={trackData.image} alt="Album Art" />
            <div className={`vinyl-overlay ${isPlaying ? 'playing' : 'paused'}`}></div>
          </div>
          
          <div className="song-info">
            <div className="song-status">
              Thomas is currently {isPlaying ? 'listening to' : 'paused on'}...
              <div className="music-waves">
                <div className={`music-wave ${isPlaying ? 'playing' : ''}`}></div>
                <div className={`music-wave ${isPlaying ? 'playing' : ''}`}></div>
                <div className={`music-wave ${isPlaying ? 'playing' : ''}`}></div>
                <div className={`music-wave ${isPlaying ? 'playing' : ''}`}></div>
                <div className={`music-wave ${isPlaying ? 'playing' : ''}`}></div>
              </div>
            </div>
            <div className="song-title">{trackData.name}</div>
            <div className="artist-name">{trackData.artists?.join(', ')}</div>
            <div className="album-name">{trackData.album}</div>
            
            {trackData.duration_ms && (
              <div className="song-progress-container">
                <div className="song-progress-bar">
                  <div 
                    className="song-progress-fill"
                    style={{ width: `${progressPercent}%` }} // CHANGED - use actual progress
                  ></div>
                </div>
                <div className="song-progress-time">
                  <span>{formatTime(progress)}</span> {/* CHANGED - show current progress */}
                  <span>{formatTime(trackData.duration_ms)}</span>
                </div>
              </div>
            )}
            
            <div className="spotify-logo">♪</div>
          </div>
        </div>
      )}

      {!loading && isOffline && (
        <div className="spotify-offline" style={{ display: 'block' }}>
          <div className="offline-icon">🎧</div>
          <div className="offline-text">Thomas is offline!</div>
          <div className="last-played">Hopefully he's doing something important...</div>
        </div>
      )}
    </div>
  );
}

export default SpotifyPlayer;