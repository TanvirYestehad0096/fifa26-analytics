import cron from 'node-cron'
import { fetchLiveMatchesFromAPI } from '../services/footballApi.js'
import Match from '../models/Match.js'

// This function will run every 1 minute
export const startCronJobs = () => {
  console.log('⏱️ Auto-update cron jobs initialized. Waiting for next cycle...')

  // Schedule task every 1 minute (for testing/live match scenarios)
  cron.schedule('* * * * *', async () => {
    console.log('🔄 [Auto-Sync] Fetching live match updates...')
    
    const liveUpdates = await fetchLiveMatchesFromAPI()

    if (liveUpdates && liveUpdates.length > 0) {
      if (liveUpdates[0].simulated) {
        // Handle Simulated Update (For testing only, until 2026)
        const team = liveUpdates[0].teamScored
        
        // Find an upcoming or live match containing this team
        const match = await Match.findOne({
          $or: [{ homeTeam: team }, { awayTeam: team }]
        })

        if (match) {
          // Score a goal!
          if (match.homeTeam === team) {
            match.homeScore = (match.homeScore || 0) + 1
          } else {
            match.awayScore = (match.awayScore || 0) + 1
          }
          
          match.status = 'live'
          await match.save()
          console.log(`⚽ [Auto-Sync] GOAL! ${team} scored. Match: ${match.homeTeam} ${match.homeScore} - ${match.awayScore} ${match.awayTeam}`)
        }
      } else {
        // Handle Real API Update (For 2026)
        // Loop through liveUpdates and update MongoDB Matches accordingly
        // Example logic to be added here based on API provider format
      }
    } else {
      console.log('✓ [Auto-Sync] No new score changes at this moment.')
    }
  })
}
