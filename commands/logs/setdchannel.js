module.exports = {

name: "setdchannel",

code: `$setServerVar[dchannel;$mentionedChannels[1]]

$title[Channel log set!]

$footer[]

$color[7eff00]

$onlyPerms[admin;You need \`Administrator\` perm to set a channel !]

$addReactions[👍]

`
}