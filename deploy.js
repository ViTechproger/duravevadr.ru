const exec = require('child_process').execSync

var commit = "Auto commit"

var cmd = exec('git add .')
	exec(`git commit -m "${commit}"`)
	exec(`git push origin master`)