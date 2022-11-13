var body = document.body;
var pre = document.getElementsByTagName("pre");
var synth = window.speechSynthesis;
synth_length = 0;
var icons = {
	search: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgIGNsYXNzPSJjMDEyNCIKICAgcm9sZT0icHJlc2VudGF0aW9uIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc0IgogICBzb2RpcG9kaTpkb2NuYW1lPSLmlrDlu7og5paH5pys5paH5qGjLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjEgKDljNmQ0MWU0MTAsIDIwMjItMDctMTQpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NiIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSI0MC40IgogICAgIGlua3NjYXBlOmN4PSIxMCIKICAgICBpbmtzY2FwZTpjeT0iMTAuMDEyMzc2IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5OTEiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPHBhdGgKICAgICBkPSJNOC41IDNhNS41IDUuNSAwIDAxNC4yMyA5LjAybDQuMTIgNC4xM2EuNS41IDAgMDEtLjYzLjc2bC0uMDctLjA2LTQuMTMtNC4xMkE1LjUgNS41IDAgMTE4LjUgM3ptMCAxYTQuNSA0LjUgMCAxMDAgOSA0LjUgNC41IDAgMDAwLTl6IgogICAgIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICBpZD0icGF0aDIiIC8+Cjwvc3ZnPgo=",
	applogo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMTI4LjBweCIKICAgaGVpZ2h0PSIxMjguMHB4IgogICB2aWV3Qm94PSIwIDAgMTI4LjAgMTI4LjAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9IlNWR1Jvb3QiCiAgIHNvZGlwb2RpOmRvY25hbWU9Imljb24uc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9Imljb242NC5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI0OC4wMDAwMDQiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI0OC4wMDAwMDQiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc4Mzc4IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzk5OTk5OSIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICBpbmtzY2FwZTp6b29tPSI1Ljc1ODQ3MzYiCiAgICAgaW5rc2NhcGU6Y3g9Ijg3LjYxMDAyMiIKICAgICBpbmtzY2FwZTpjeT0iNjIuNDI5NzM4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5OTEiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgaWQ9ImdyaWQ4Mzg0IiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4MzczIj4KICAgIDxyZWN0CiAgICAgICB4PSIzNSIKICAgICAgIHk9IjQ1IgogICAgICAgd2lkdGg9IjM1IgogICAgICAgaGVpZ2h0PSIyNSIKICAgICAgIGlkPSJyZWN0MTc2MDIiIC8+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDEwMzQ1Ij4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzIxOTZmMztzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3AxMDM0MSIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAzYTlmNDtzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgaWQ9InN0b3AxMDM0MyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDEwMzQ1IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50MTAzNDciCiAgICAgICB4MT0iOS41MTM2MjYxIgogICAgICAgeTE9IjY0Ljg2MDkzOSIKICAgICAgIHgyPSIxMTkuNTEzNjMiCiAgICAgICB5Mj0iNjQuODYwOTM5IgogICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMDk5OTU3LDAsMCwxLjA5OTk1NjksLTYuODM4MzgwNSwtNy4yMjA0MDMzKSIgLz4KICA8L2RlZnM+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0i5Zu+5bGCIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTp1cmwoI2xpbmVhckdyYWRpZW50MTAzNDcpO3N0cm9rZS13aWR0aDoxOC4wMDQzO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGg5MTY5IgogICAgICAgY3g9IjY0LjEyMzg0IgogICAgICAgY3k9IjY0LjEyMzgyNSIKICAgICAgIHJ4PSI1NC45OTc4NDUiCiAgICAgICByeT0iNTQuOTk3ODM3IiAvPgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBpZD0idGV4dDE3NjAwIgogICAgICAgc3R5bGU9ImZpbGw6IzFkOTlmMztmaWxsLW9wYWNpdHk6MC4zMTc2NDcwNztzdHJva2U6IzAwNmRmZjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTt3aGl0ZS1zcGFjZTpwcmU7c2hhcGUtaW5zaWRlOnVybCgjcmVjdDE3NjAyKSIgLz4KICA8L2c+Cjwvc3ZnPgo=",
	apps: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgIGNsYXNzPSJjMDE1ODYiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzM2IgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0MCIgLz4KICA8cGF0aAogICAgIGQ9Ik00LjUgMTdBMS41IDEuNSAwIDAxMyAxNS42NFY0LjVjMC0uNzguNi0xLjQyIDEuMzYtMS41SDljLjc4IDAgMS40Mi42IDEuNSAxLjM2di4zOWwyLjE5LTIuMjZhMS41IDEuNSAwIDAxMi0uMTRsLjEyLjEgMi43NiAyLjcyYy41NS41NS42IDEuNDIuMTEgMi4wMWwtLjEuMTItMi4zMSAyLjJoLjIzYy43OCAwIDEuNDIuNiAxLjUgMS4zNnY0LjY0YzAgLjc4LS42IDEuNDItMS4zNiAxLjVINC41em01LTYuNUg0djVjMCAuMjEuMTQuNC4zMy40N2wuMDguMDIuMDkuMDFoNXYtNS41em02IDBoLTVWMTZoNWEuNS41IDAgMDAuNS0uNDFWMTFhLjUuNSAwIDAwLS40MS0uNWgtLjA5em0tNS0yLjh2MS44aDEuNzlMMTAuNSA3Ljd6TTkgNEg0LjVhLjUuNSAwIDAwLS41LjQxVjkuNWg1LjV2LTVhLjUuNSAwIDAwLS4zMy0uNDdsLS4wOC0uMDJMOSA0em01LjEyLS44M2EuNS41IDAgMDAtLjY0LS4wNWwtLjA3LjA2LTIuNjIgMi43MWEuNS41IDAgMDAtLjA1LjYzbC4wNi4wNyAyLjYxIDIuNjJjLjE3LjE3LjQzLjIuNjIuMDdsLjA4LS4wNiAyLjc2LTIuNjNhLjUuNSAwIDAwLjA1LS42NGwtLjA1LS4wNy0yLjc1LTIuN3oiCiAgICAgZmlsbC1ydWxlPSJub256ZXJvIgogICAgIGlkPSJwYXRoMzQiIC8+Cjwvc3ZnPgo=",
	color: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgIGNsYXNzPSJjMDEzOTIiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzQiCiAgIHNvZGlwb2RpOmRvY25hbWU9Imljb24gLSDlia/mnKwuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMSAoOWM2ZDQxZTQxMCwgMjAyMi0wNy0xNCkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjQwLjQiCiAgICAgaW5rc2NhcGU6Y3g9IjEwIgogICAgIGlua3NjYXBlOmN5PSIxMC4wMTIzNzYiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk5MSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTkiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIgLz4KICA8cGF0aAogICAgIGQ9Ik01Ljc3IDMuMTdhNy44MiA3LjgyIDAgMDE3LjkzLS4xOGMzLjk3IDIuMDQgNS41IDYuMTYgNC4xOCAxMC40NGE3LjQ2IDcuNDYgMCAwMS0yLjM3IDMuNTkgNC4zMiA0LjMyIDAgMDEtNC4yLjggMy44NCAzLjg0IDAgMDEtMi4yLTEuNjhjLS40MS0uNy0uNTMtMS40Ny0uNTgtMi4xNGwtLjAyLS4yOS0uMDQtLjY2Yy0uMDItLjMtLjA1LS41NS0uMS0uNzZhMS4xNiAxLjE2IDAgMDAtLjItLjQ3Ljc1Ljc1IDAgMDAtLjQtLjI0IDEuODYgMS44NiAwIDAwLTEuNjYuMmwtLjM4LjIzYy0uMzEuMTgtLjcyLjQtMS4yMy4zN2EyLjkxIDIuOTEgMCAwMS0xLjY2LS43NyAyLjYzIDIuNjMgMCAwMS0uOTQtMi4xMmMwLS43OS4yNS0xLjYzLjYyLTIuNDNhOS42IDkuNiAwIDAxMy4yNS0zLjl6bTcuNDcuNzFhNi44MiA2LjgyIDAgMDAtNi45NS4xNGMtMSAuNjItMi4yIDItMi44NyAzLjQ2YTQuOTIgNC45MiAwIDAwLS41MiAyYzAgLjU5LjE5IDEuMDQuNTcgMS4zNS41My40My44Ni41NCAxLjA4LjU1LjIuMDEuNC0uMDcuNjgtLjIzbC4xNC0uMWMuMjUtLjE0LjU3LS4zNC45NS0uNDZhMi44NSAyLjg1IDAgMDExLjc1LjAzYy4zNy4xMS42NS4zLjg3LjU3LjIuMjYuMzMuNTYuNC44Ni4wNy4zLjEuNjIuMTMuOTNsLjA0Ljc2LjAyLjE4YTQgNCAwIDAwLjQ0IDEuNzFjLjI4LjQ4Ljc2LjkzIDEuNjYgMS4yNCAxLjIyLjQyIDIuMzMuMSAzLjI2LS42NGE2LjQ2IDYuNDYgMCAwMDIuMDQtMy4xYzEuMTgtMy44NS0uMTgtNy40NS0zLjY5LTkuMjV6bS0uNzQgOS4zN2EuNzUuNzUgMCAxMTAgMS41Ljc1Ljc1IDAgMDEwLTEuNXptMi0yYS43NS43NSAwIDExMCAxLjUuNzUuNzUgMCAwMTAtMS41em0wLTNhLjc1Ljc1IDAgMTEwIDEuNS43NS43NSAwIDAxMC0xLjV6TTEyLjc1IDZhLjc1Ljc1IDAgMTEwIDEuNS43NS43NSAwIDAxMC0xLjV6bS0zLTFhLjc1Ljc1IDAgMTEwIDEuNS43NS43NSAwIDAxMC0xLjV6IgogICAgIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICBpZD0icGF0aDIiIC8+Cjwvc3ZnPgo=",
	text: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgIGNsYXNzPSJjMTE3NiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzOCIgLz4KICA8cGF0aAogICAgIGQ9Ik02IDJjLjIgMCAuNC4xMy40Ny4zMkw4LjkgOC41N3YuMDJsLjE4LjQ0LS41MyAxLjQtLjQ2LTEuMTdIMy45MWwtLjk0IDIuNDJhLjUuNSAwIDExLS45NC0uMzZMMy4xIDguNTlsLjAxLS4wMiAyLjQzLTYuMjVBLjUuNSAwIDAxNiAyek00LjMgOC4yNmgzLjRMNiAzLjg4IDQuMyA4LjI2em04LjE3LTIuOTRhLjUuNSAwIDAwLS45NCAwTDcuMTUgMTdINi41YS41LjUgMCAwMDAgMWgyYS41LjUgMCAwMDAtMWgtLjI4bDEuMTMtM2g1LjM3bDEuMTUgM2gtLjM3YS41LjUgMCAxMDAgMWgyYS41LjUgMCAxMDAtMWgtLjU2TDEyLjQ3IDUuMzJ6TTE0LjM0IDEzSDkuNzJMMTIgNi45MSAxNC4zNCAxM3oiCiAgICAgZmlsbC1ydWxlPSJub256ZXJvIgogICAgIGlkPSJwYXRoMiIgLz4KPC9zdmc+Cg==",
	downloads: `<svg width="20" height="20" viewBox="0 0 20 20" class="c01763"><path d="M15.5 17a.5.5 0 01.09 1H4.5a.5.5 0 01-.09-1H15.5zM10 2a.5.5 0 01.5.41V14.3l3.64-3.65a.5.5 0 01.64-.06l.07.06c.17.17.2.44.06.63l-.06.07-4.5 4.5a.5.5 0 01-.25.14L10 16a.5.5 0 01-.4-.2l-4.46-4.45a.5.5 0 01.64-.76l.07.06 3.65 3.64V2.5c0-.28.22-.5.5-.5z" fill-rule="nonzero"></path></svg>`,
	mulu: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgY2xhc3M9ImMwMTQzIgogICB2aWV3Qm94PSIwIDAgMTYgMTAiCiAgIHdpZHRoPSIxNnB4IgogICBoZWlnaHQ9IjEwcHgiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzQiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImEuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMSAoOWM2ZDQxZTQxMCwgMjAyMi0wNy0xNCkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjEwLjEiCiAgICAgaW5rc2NhcGU6Y3g9Ii00Ljc1MjQ3NTIiCiAgICAgaW5rc2NhcGU6Y3k9IjUuMTk4MDE5OCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTkxIgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc0IiAvPgogIDxwYXRoCiAgICAgZD0iTTAgMUgxNlYwSDBWMVpNMCA5SDE2VjhIMFY5Wk0wIDQuOTkyMTlIMTZWNEgwVjQuOTkyMTlaIgogICAgIGlkPSJwYXRoMiIgLz4KPC9zdmc+Cg==",
	langdu: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgIGNsYXNzPSJjMTEyMjMiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzQiCiAgIHNvZGlwb2RpOmRvY25hbWU9IuaWsOW7uiDmlofmnKzmlofmoaMuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMSAoOWM2ZDQxZTQxMCwgMjAyMi0wNy0xNCkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjQwLjQiCiAgICAgaW5rc2NhcGU6Y3g9IjEwIgogICAgIGlua3NjYXBlOmN5PSIxMC4wMTIzNzYiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk5MSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTkiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIgLz4KICA8cGF0aAogICAgIGQ9Ik03LjUgNGMuMTggMCAuMzQuMS40My4yNWwuMDQuMDggNCAxMWEuNS41IDAgMDEtLjkuNDJsLS4wNC0uMDhMOS43IDEySDUuM2wtMS4zMyAzLjY3YS41LjUgMCAwMS0uOTYtLjI1bC4wMi0uMSA0LTExQS41LjUgMCAwMTcuNSA0em0wIDEuOTZMNS42NyAxMWgzLjY2TDcuNSA1Ljk2em01LjI0LTMuOWwuMzkuMjJhOS41IDkuNSAwIDAxNC44NCA3LjM2bC4wMy4zMWEuNS41IDAgMDEtMSAuMWwtLjAzLS4zMmE4LjUgOC41IDAgMDAtNC4zMy02LjU4bC0uMzgtLjIxYS41LjUgMCAwMS40OC0uODh6bS0xLjE3IDIuNjhhLjUuNSAwIDAxLjYtLjJsLjA5LjAzLjEyLjA4YTYuNSA2LjUgMCAwMTMuMDIgNC4yM2wuMDUuMjcuMDQuMjdhLjUuNSAwIDAxLS45Ni4yNWwtLjAyLS4wOS0uMDUtLjI2YTUuNSA1LjUgMCAwMC0yLjM3LTMuNjdsLS4yMi0uMTUtLjEzLS4wN2EuNS41IDAgMDEtLjE3LS42OXoiCiAgICAgZmlsbC1ydWxlPSJub256ZXJvIgogICAgIGlkPSJwYXRoMiIgLz4KPC9zdmc+Cg==",
};
var langduzhuangtai = 0;

var a_href = document.getElementsByTagName("a");

for(var a = 0; a < a_href.length; a++) {
	if(a_href[a].href.search("^(https|http|ftp|\/\/|)(:\/\/.*|).*\.(txt)") != -1) {
		var temphref = a_href[a].href;
		a_href[a].href = "javascript: open('" + temphref + "');";
	}
}

if (pre.length == 1) {
	if(document.all.length < 8) {
		loading();
		if(!localStorage.ys_color) {
			color(7);
		} else {
			color(localStorage.ys_color);
		}
		if(!localStorage.ys_zhuti) {
			zhuti(0);
		} else {
			zhuti(localStorage.ys_zhuti);
		}
		if(!localStorage.ys_font) {
			font(0);
		} else {
			font(localStorage.ys_font);
		}
		if(!localStorage.ys_font_size) {
			font_size(16);
		} else {
			font_size(localStorage.ys_font_size);
		}
	}
}

function loading() {
	/* 基本处理 */
	pre = document.getElementsByTagName("pre")[0];
	if(!pre) {
		preText = body.innerHTML;
		body.innerHTML = "";
	} else {
		preText = pre.innerHTML;
	}
	var Style = document.createElement("Style");

	Style.innerHTML = `
	
			body {
				margin: 0;
				padding: 0;
				background-color: var(--bg-0);
			}
			
			pre {
				display: none;
			}
			
			toolbar {
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				width: 50px;
				box-shadow: 0 0 8px 0px var(--bg-2);
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				align-items: stretch;
				background-color: var(--bg-3);
				
			}
			
			toolbar:hover .toolbar_text {
				display: block;
			    color: var(--text-color-0);
			    font-weight: lighter;
				    margin-left: 8px;
				    margin-right: 8px;
			}
			
			summary::marker {
				display: none;
			}
			
			toolbar details summary:hover {
			    background-image: linear-gradient(to right,var(--color-0), var(--color-1));
			}
			
			toolbar details summary, .details {
			    margin: 4px;
			    margin-bottom: 0px;
			    display: flex;
			    flex-wrap: nowrap;
			    justify-content: flex-start;
			    align-items: center;
				border-radius: 8px;
			}
			
			toolbar details summary:hover {
				background-image: linear-gradient(to right,var(--color-0), var(--color-1));
			}
			
			toolbar details summary:hover .btn {
				background-image: linear-gradient(to right,var(--text-color-1), var(--text-color-1));
			}
			
			
			toolbar details summary:active {
				background-image: linear-gradient(to right,var(--color-1), var(--color-2));
			}
			
			toolbar .btn {
    width: 42px;
    height: 42px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 20px;
    -webkit-mask-position: 50%;
    background-image: linear-gradient(to right,var(--color-0), var(--color-1));
	display: block;

			}
			
			container {
			    max-width: 600px;
			    padding-left: 80px;
			    padding-top: 30px;
			    padding-bottom: 30px;
			    padding-right: 30px;
			    margin: auto;
			    display: block;
			}
			
			container * {
				font-weight: lighter;
				line-height: 200%;
				text-align: justify;
				color: var(--text-color-0);
			}
				
			container p {
				margin-top: 1em;
				margin-bottom: 1em;
			}
			
			container h2.h1 {
				margin-top: 40px;
				margin-bottom: 0;
				text-align: center;
			}
			
			container h2.h2 {
				margin-top: 0;
				margin-bottom: 0;
			}
			
			container h2.h3 {
				margin-top: 0;
				margin-bottom: 0;
			}
			
			container h2.h4 {
				margin-top: 0;
				margin-bottom: 0;
			}
			
			.text_loading {
			    margin-top: 4px;
			    margin-bottom: 4px;
			    padding-left: 4px;
			    padding-right: 4px;
			    font-size: 12px;
			    user-select: none;
			    color: var(--text-color-0);
			}
			
			container .line {
				height: 4px;
				background-image: linear-gradient(to right,var(--color-0), var(--color-1));
				border-radius: 8px;margin-bottom: 1em;
			}
			
			container .line-a {
				width: 100px;
				margin: auto;
			}
			
			container .line-b {
				width: 50px;
			}
			
			container .line-c {
				width: 25px;
			}
			
			details[open] summary {
			    background-color: var(--selection-color-0);
			}
			
			details .btn_top {
			    background-color: var(--bg-3);
			    box-shadow: 0 0 8px 0px var(--bg-2);
			    border-radius: 8px;
			    width: 200px;
			    display: flex;
			    flex-wrap: wrap;
			    margin-left: 58px;
			    margin-top: -42px;
			    margin-bottom: 8px;
			    padding-left: 8px;
			    padding-top: 8px;
			    padding-right: 8px;
			    padding-bottom: 8px;
			    z-index: 10;
			    max-height: 400px;
			    overflow-y: auto;
			    overflow-x: hidden;
			    position: fixed;
			}
			
			details .btn_top .color_btn {
			        width: 42px;
			    height: 42px;
				text-align: center;
				border-radius: 8px;
				margin: 4px;
				color: var(--text-color-1);
				font-size: 12px;
				user-select: none;
				padding: 0;
				box-shadow: 0 0 0 1px var(--bg-2);
			}
			
			details .btn_top .color_btn:hover {
				box-shadow: 0 0 0 2px var(--bg-2);
			}
			
			details .btn_top .color_btn:active {
				box-shadow: 0 0 0 2px var(--color-0);
			}
			
			details .btn_top h2 {
			        margin-top: 4px;
			        margin-bottom: 4px;
			        width: 100%;
			        font-size: 14px;
			        font-weight: bolder;
			        padding-left: 4px;
			        padding-right: 4px;
			        height: 20px;
			        line-height: 20px;
					    color: var(--text-color-0);
			}
			details .btn_top .text_btn {
				width: calc(50% - 12px);
				height: 50px;
				line-height: 50px;
				text-align: center;
				border: 2px solid var(--color-0);
				margin: 4px;
				border-radius: 8px;
			}
			#mulu_box  {
				    width: 100%;
			}
			#mulu_box a {
			    display: block;
			    font-size: 14px;
			    line-height: 30px;
			    margin: 4px;
			    text-decoration: inherit;
			    border-radius: 8px;
			    color: var(--text-color-0);
			    padding-left: 8px;
			    padding-right: 8px;
				user-select: none;
				font-size: 14px;    font-weight: lighter;
    line-height: 200%;
			}
			
			.by {
				text-align: center;
			}
			
			#mulu_box a.h1 {
			    padding-left: 8px;
			}
			#mulu_box a.h2 {
			    padding-left: 16px;
			}
			#mulu_box a.h3 {
			    padding-left: 24px;
			}
			#mulu_box a.h4 {
			    padding-left: 32px;
			}
			
			#mulu_box a:hover {
				background-image: linear-gradient(to right,var(--color-0), var(--color-1));
				color: var(--text-color-1);
}			#mulu_box a:active {
			    background-image: linear-gradient(to right,var(--color-1), var(--color-2));
			}
			#search_input {
				margin-top: 0;
			    margin-bottom: 4px;
			    width: 100%;
			    border: 0;
			    height: 30px;
			    padding-left: 8px;
			    padding-right: 8px;
			    border-radius: 8px;
			    background-image: linear-gradient(to right,var(--color-0), var(--color-1));
			    color: var(--text-color-1);
			    outline: 0;
			}
			input#search_input::-webkit-input-placeholder {
				color: var(--text-color-1);
			}
			#search_input:active {
			    background-image: linear-gradient(to right,var(--color-1), var(--color-2));
			}
			#search_box {
				    width: 100%;
			}
			#search_box a {
				        color: var(--text-color-0);
				        text-decoration: inherit;
				        display: block;
				        margin-top: 4px;
				        margin-bottom: 4px;
				        font-size: 14px;
						    padding: 8px;
						    border-radius: 8px;    font-weight: lighter;    user-select: none;
    line-height: 200%;
					
			}
			#search_box a:hover {
							background-image: linear-gradient(to right,var(--color-0), var(--color-1));
							color: var(--text-color-1);
			}
			#search_box a:active {
						    background-image: linear-gradient(to right,var(--color-1), var(--color-2));
			}
			.icons_applogo {
				-webkit-mask-image: url("` + icons.applogo + `");
			}
				
			.icons_apps {
				-webkit-mask-image: url("` + icons.apps + `");
			}
			
			.icons_color {
				-webkit-mask-image: url("` + icons.color + `");
			}
			
			.icons_text {
				-webkit-mask-image: url("` + icons.text + `");
			}
			.icons_mulu {
				-webkit-mask-image: url("` + icons.mulu + `");
			}
			.icons_search {
				-webkit-mask-image: url("` + icons.search + `");
			}
			.icons_langdu {
				-webkit-mask-image: url("` + icons.langdu + `");
			}
			
			.fontsize_btn,.font_btn {
				width: 92px;
				    height: 42px;
				    text-align: center;
				    border-radius: 8px;
				    margin: 4px;
				    color: var(--text-color-0);
				    font-size: 12px;
				    line-height: 42px;
				    user-select: none;
				    padding: 0;
				    box-shadow: 0 0 0 1px var(--bg-2);
			}
			
			::-webkit-scrollbar {
				width: 16px;
				display: block;
				background: transparent;
			}
			
			::-webkit-scrollbar-thumb {
				height: 50px;
				border: 6px solid transparent;
				display: block;
				background: var(--color-0);
				border-radius: 10px;
				background-clip: padding-box;
			}
			
			::-webkit-scrollbar-track {
				background: transparent;
			}
			
			::selection {
			    background-color: var(--selection-color-0);
			}
			.gaoliang,.zhengzailangdu {
				font-weight: initial;
				    background-color: var(--selection-color-0);
			}
			`;

	body.appendChild(Style);


	var toolbar = document.createElement("toolbar");
	toolbar.innerHTML = `
	<details>
		<summary><span class="btn icons_applogo" title="影深"></span></summary>
	    <div class="btn_top">
			<div class='text_loading'>关于 影深<br />版本: 0.0.3</div>
		</div>
	</details>
					<details>
						<summary><span class="btn icons_mulu" title="目录"></span></summary>
					    <div class="btn_top">
							<h2>目录</h2>
							<div id="mulu_box"><div class='text_loading'>Loading...</div></div>
						</div>
					</details>
					<details>
						<summary><span class="btn icons_search" title="搜索"></span></summary>
					    <div class="btn_top">
							<input id="search_input" placeholder="搜索标题、文字" type="text" value="" oninput="search()">
							<div id="search_box"><div class='text_loading'>想试试高级搜索？<br />你可以用正则表达式搜索。</div></div>
						</div>
					</details>
					<details>
						<summary><span class="btn icons_color" title="主题和配色"></span></summary>
					    <div class="btn_top">
							<h2>主题</h2>
							<div class="color_btn" style="background-color: #fff;" onclick="zhuti(0)"></div>
							<div class="color_btn" style="background-color: #222;" onclick="zhuti(1)"></div>
							<div class="color_btn" style="background-color: rgb(244, 236, 216);" onclick="zhuti(2)"></div>
							<div class="color_btn" style="background-color: #e8f5e9;" onclick="zhuti(3)"></div>
							<h2>配色</h2>
							<div class="color_btn" style="background-color: #f44336;" onclick="color('0')"></div>
							<div class="color_btn" style="background-color: #e91e63;" onclick="color(1)"></div>
							<div class="color_btn" style="background-color: #9c27b0;" onclick="color(2)"></div>
							<div class="color_btn" style="background-color: #673ab7;" onclick="color(3)"></div>
							<div class="color_btn" style="background-color: #3f51b5;" onclick="color(4)"></div>
							<div class="color_btn" style="background-color: #2196f3;" onclick="color(5)"></div>
							<div class="color_btn" style="background-color: #03a9f4;" onclick="color(6)"></div>
							<div class="color_btn" style="background-color: #00bcd4;" onclick="color(7)"></div>
							<div class="color_btn" style="background-color: #009688;" onclick="color(8)"></div>
							<div class="color_btn" style="background-color: #4caf50;" onclick="color(9)"></div>
							<div class="color_btn" style="background-color: #8bc34a;" onclick="color(10)"></div>
							<div class="color_btn" style="background-color: #cddc39;" onclick="color(11)"></div>

						</div>
					</details>
					<details>
						<summary><span class="btn icons_text" title="字体"></span></summary>
					    <div class="btn_top">
							<h2>字体</h2>
							<div class="font_btn" style="font-family: Helvetica, Arial, sans-serif;" onclick="font(0)">Helvetica</div>
							<div class="font_btn" style="font-family: Georgia, 'Times New Roman', serif;" onclick="font(1)">Georgia</div>
							<div class="font_btn" style="font-family: Calibri,sans-serif, Georgia, Cambria;" onclick="font(2)">Calibri</div>
							<div class="font_btn" style="font-family: Sitka Text,Georgia, Cambria, Calibri;" onclick="font(3)">Sitka</div>
							<h2>字体大小</h2>
							<div class="fontsize_btn" onclick="font_size(24)">大</div>
							<div class="fontsize_btn" onclick="font_size(20)">中</div>
							<div class="fontsize_btn" onclick="font_size(16)">小</div>
							<div class="fontsize_btn" onclick="font_size(12)">更小</div>
						</div>
					</details>
				`;
				
	body.appendChild(toolbar);

	container = document.createElement("container");
	container.innerHTML = "<div class='text_loading'>Loading...</div>";
	document.title = "影深";
	body.appendChild(container);


	function text() {


		//字符串处理
		var temptexts = preText.split("\n");
		texts = "";
		for (var a = 0; a < temptexts.length; a++) {
			var b = temptexts[a];
			//如果此行长度不是0
			if (b.length != 0) {
				var b = b.replaceAll("&nbsp;", " ");
				var b = b.trim();
				//删除首尾空白后如果长度不是0
				if (b.length != 0) {
					if (a < 20 && b.length < 50 && b.search("^.*书名：.*$") == 0 || a < 4 && b.length < 50 && b.search("^.*《.*》.*$") == 0) {
						texts += "<h2 class='h1' id='container_" + a + "'>" + b + "</h2><div class='line line-a'></div>";
						document.title = b;
					} else if (b.length < 30 && b.search("^作者(：|:|: ).*$") == 0) {
							texts += "<p class='by' id='container_" + a + "'>" + b + "</p>";
					} else if (b.length < 50) {
						if (b.search("^☆、第.*卷$") == 0 || b.search("^第.*卷.*$") == 0 || b.search("^第.*部.*$") == 0) {
							texts += "<h2 class='h2' id='container_" + a + "'>" + b + "</h2><div class='line line-b'></div>";
						} else if (a < 80 && b.length < 8 && b.search("^编辑评价(:|：|: |)$") == 0 || a < 80 && b.length < 5 && b.search("^作者简介$") == 0 || a < 80 && b.length < 5 && b.search("^内容简介$") == 0 || a < 80 && b.length < 5 && b.search("^简介(：|:|: )$") == 0 || b.length < 5 && b.search("^楔子$") == 0 ||a < 80 &&  b.length < 8 && b.search("^作品简评：$") == 0 ||a < 80 &&  b.length < 5 && b.search("^文案：$") == 0 ||a < 80 &&  b.length < 5 && b.search("^文案$") == 0 || b.length < 5 && b.search("^【简介】$") == 0 ||a < 80 &&  b.length < 5 && b.search("^【文案】$") == 0 || b.search("^===第.*章.*===$") == 0 || b.search("^Chapter([0-9]|[0-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9])$") == 0 ||b.search("^([0-9]|[0-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9])第.*章$") == 0 || b.length < 25 && b.search("^☆、.*$") == 0 ||b.search("^正文 第.*章.*$") == 0 || b.search("^☆、第.*章$") == 0 ||a < 80 &&  b.search("^简介$") == 0 || b.search("^第.*章.*$") == 0 || b.search("^第.*篇.*$") == 0) {
							texts += "<h2 class='h3' id='container_" + a + "' >" + b + "</h2><div class='line line-c'></div>";
						} else if (b.length < 20 && b.search("^([0-9]|[0-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9]) .*$") == 0 || b.search("^☆、第.*节") == 0 || b.search("^第.*节.*$") == 0 || b.search("^第.*页.*$") == 0) {
							texts += "<h2 class='h4' id='container_" + a + "'>" + b + "</h2>";
						} else {
							texts += "<p id='container_" + a + "'>" + b + "</p>";
						}
					} else {
							texts += "<p id='container_" + a + "'>" + b + "</p>";
					}

			}
		}
		}
		container.innerHTML = texts;
		
		var mulu_box = document.getElementById("mulu_box");
		var mulus = container.getElementsByTagName("h2");
		mulu_divs = '';
		for(var a = 0; a < mulus.length; a ++) {
			mulu_divs += "<a class='" + mulus[a].className + "' href='#" + mulus[a].id + "'>" + mulus[a].innerHTML + "</a>";
		}
		mulu_box.innerHTML = mulu_divs;
		
	}
	
	setTimeout(text, 0);
	
}

function color(a) {

	var colors = [
		"#f44336", //1
		"#e91e63", //2
		"#9c27b0", //3
		"#673ab7", //4
		"#3f51b5", //5
		"#2196f3", //6
		//
		"#03a9f4", //7
		"#00bcd4", //8
		"#009688", //1
		"#4caf50", //2
		"#8bc34a", //3
		"#cddc39", //4
		"#ffeb3b", //5
		"#ffc107", //6
		"#ff9800", //7
		"#ff5722" //8
	];
	
	var a = parseInt(a);
	var _color_a = a;
	var _color_b = a + 1;
	var _color_c = a + 2;
	var color = document.createElement("style");

	color.innerHTML = `
		* {
			--color-0: ` + colors[_color_a] + `;
			--color-1: ` + colors[_color_b] + `;
			--color-2: ` + colors[_color_c] + `;
			--selection-color-0: ` +  colors[_color_a] + `30;
		}
	`;

	body.appendChild(color);
	localStorage.setItem("ys_color", a);
}

function zhuti(a) {

	var zhutis = [
		["#fff", "#fff", "#eee", "#000", "#fff","#fff"],
		["#222", "#444", "#111", "#fff", "#fff","#333"],
		["rgb(244, 236, 216)", "#e0d7c5", "#ccc", "rgb(91, 70, 54)", "#fff","rgb(244, 236, 216)"],
		["#e8f5e9", "#e8f5e9", "#ccc", "rgb(12 62 14)", "#fff","#e8f5e9"]
	];
	var zhuti = document.createElement("style");

	zhuti.innerHTML = `
		* {
			--bg-0: ` + zhutis[a][0] + `;
			--bg-1: ` + zhutis[a][1] + `;
			--bg-2: ` + zhutis[a][2] + `;
			--bg-3: ` + zhutis[a][5] + `;
			--text-color-0: ` + zhutis[a][3] + `;
			--text-color-1: ` + zhutis[a][4] + `;
		}
	`;

	body.appendChild(zhuti);
	localStorage.setItem("ys_zhuti", a);
}

function font(a) {
	
	var fonts = [
		"Helvetica, Arial, sans-serif",
		"Georgia, 'Times New Roman', serif",
		"Calibri,sans-serif, Georgia, Cambria",
		"Sitka Text,Georgia, Cambria, Calibri"
	];
	
	var fonts_div = document.createElement("style");
	
	fonts_div.innerHTML = `container * { font-family: ` + fonts[a] + ` }`;
	
	body.appendChild(fonts_div);
	localStorage.setItem("ys_font", a);
	
}

function font_size(a) {
	
	var font_size_div = document.createElement("style");
	
	font_size_div.innerHTML = `
		container * { 
			font-size: ` + a + `px;
		}
		container p {
			font-size: ` + a + `px;
		}
		container h2.h1 {
			font-size: ` + a*1.5 + `px;
		}
		container h2.h2 {
			font-size: ` + a*1.2 + `px;
		}
		container h2.h3 {
			font-size: ` + a + `px;
		}
		container h2.h4 {
			font-size: ` + a + `px;
		}
		`;
	
	body.appendChild(font_size_div);
	localStorage.setItem("ys_font_size", a);
	
}

function search() {
	
	var search_box = document.getElementById("search_box");
	var search_input = document.getElementById("search_input");
	
	var search_text = search_input.value;
	
	if(search_text.length != 0) {
		
		search_box.innerHTML = "<div class='text_loading'>正在搜索中...</div>";
		var container_p = container.getElementsByTagName("*");
		search_list = "";
	
	    try { 
			
		for(var a = 0; a < container_p.length; a ++) {
			
			if(container_p[a].innerHTML.search(search_text) != -1) {
				var tesss = container_p[a].innerHTML.replaceAll(search_text,"<b class='gaoliang'>" + search_text + "</b>");
				
				search_list += "<a href='#" + container_p[a].id + "'>" + tesss + "</a>";
			}
			
		}
		} catch(err) { 
	        search_list = "<div class='text_loading'>Oh on!<br />搜索出错了，请检查搜索词。</div>";
	    } 
		
		if(search_list.length == 0) {
			search_list = "<div class='text_loading'>没有找到与“" + search_text + "”相关的内容。</div>";
		}
		
		search_box.innerHTML = search_list;
	
	//temptexts
	} else {
		search_box.innerHTML = "<div class='text_loading'>搜索词是空的。</div>";
	}
	
}
