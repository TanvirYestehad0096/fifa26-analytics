import axios from 'axios'

// ⚠️ In the future (2026), replace this with the actual API-Football Endpoint
const API_URL = 'https://v3.football.api-sports.io'
const LEAGUE_ID = 4 // World Cup
const SEASON = 2026

export const fetchLiveMatchesFromAPI = async () => {
  try {
    if (!process.env.FOOTBALL_API_KEY) {
      console.log('⚠️ FOOTBALL_API_KEY not found. Simulating live data update for testing...')
      return simulateLiveData()
    }

    const response = await axios.get(`${API_URL}/fixtures`, {
      params: { live: 'all', league: LEAGUE_ID, season: SEASON },
      headers: { 'x-apisports-key': process.env.FOOTBALL_API_KEY }
    })
    
    return response.data.response || []
  } catch (error) {
    console.error('Error fetching live matches:', error.message)
    return []
  }
}

// Simulation function to show auto-update before the 2026 World Cup begins
const simulateLiveData = () => {
  // Randomly decide if a goal is scored in a live match
  const teams = ['Argentina', 'France', 'Brazil', 'Spain', 'England']
  const randomTeam = teams[Math.floor(Math.random() * teams.length)]
  const goalScored = Math.random() > 0.7 // 30% chance a goal happens during this sync cycle

  if (goalScored) {
    return [
      {
        simulated: true,
        teamScored: randomTeam
      }
    ]
  }
  return []
}
