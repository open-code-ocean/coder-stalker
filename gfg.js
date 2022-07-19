const axios = require("axios");
async function UserData() {
  const response = await axios.post(
    "https://auth.geeksforgeeks.org/line-chart.php",
    new URLSearchParams({
      year: "2022",
      month: "6",
      user_id: "2665596",
    }),
    {
      headers: {
        Accept: "*/*",
        "Accept-Language":
          "en-IN,en;q=0.9,mr-IN;q=0.8,mr;q=0.7,en-GB;q=0.6,en-US;q=0.5,hi;q=0.4,es;q=0.3,pt;q=0.2",
        Connection: "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Cookie:
          '_gcl_au=1.1.607377277.1654519942; gfg_nluid=4ed4d83bfc1a4db58f63ec3e43d13450; __gads=ID=adfb140a4fa692e5:T=1654519945:S=ALNI_Maj-cP0z61FN5KaiLpSMjDGdiWclw; default_lang=java; _gaexp=GAX1.2.vRCpFWF5SXy8xr3gfR3hRA.19204.0; _fbp=fb.1.1657433271929.512336731; geeksforgeeks_consent_status=dismiss; _hjSessionUser_2477396=eyJpZCI6IjM3YjY1NGIzLTFmYmItNTAxMi1iNDRkLTJiNDJlZmRhN2M4YiIsImNyZWF0ZWQiOjE2NTc0MzM0NjQ5ODgsImV4aXN0aW5nIjp0cnVlfQ==; trc_cookie_storage=taboola%2520global%253Auser-id%3Dfced2f0e-2cc3-403d-87ca-52f5e87fe33a-tuct98a5e7d; _cc_id=84e9035ffa9703a797d0176176fe7e0c; gfguserName=dev_shivraj%2FeyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmdlZWtzZm9yZ2Vla3Mub3JnXC8iLCJpYXQiOjE2NTc0MzM4OTksImV4cCI6MTY2MDAyNTg5OCwiaGFuZGxlIjoiZGV2X3NoaXZyYWoiLCJ1dWlkIjoiZjA2MTQ3ZjUwYTY5OWY1NDkzYjBjMTEyZWUyODVlNDgiLCJwcm9maWxlVXJsIjoiaHR0cHM6XC9cL21lZGlhLmdlZWtzZm9yZ2Vla3Mub3JnXC9hdXRoXC9wcm9maWxlXC9seHhqbnpocXBnZnh6dGNjbjhvMyIsImluc3RpdHV0ZUlkIjoyMDQ0LCJpbnN0aXR1dGVOYW1lIjoiUGFkIERyIERZIFBhdGlsIEluc3RpdHV0ZSBvZiBFbmdpbmVlcmluZyBtYW5hZ2VtZW50IGFuZCByZXNlYXJjaCAoRFlQSUVNUikgUHVuZSIsIm5hbWUiOiJTaGl2cmFqMTAyIiwiaXNJbnRlcmVzdFNlbGVjdGVkIjpmYWxzZSwicHVpZCI6InVXeUxTdHcrMXc9PSJ9.mPnRxx-kKhkTZJuohY6ewaoL0G0AB8gCuTOFQQIB2fXIqmGDn1C0zlQqcCAkO1Nxvy4L6a3iSk6z1z8w9VHVKguyPvmaRic-5sBTgCWkiVpaYyBk7V_wRoS8Jdel90vgCnAnxlp9KC0RXksgTj7YAA7imcHKSI3zgBqG_4XWFmNMHP6K7K4SsnuwYnkTqHI37SDu99c_2zPiFOcoW9lTFVNkIZnHlU4b1ncfgEP_ES410tIKSF2F9aRaopBf7GwfckgSGh6tZZollOpjMiIV91gQ3o4eL1NPiyQjqfD1Oh7jDtnE_jngkSAdCc7HqDdrlS3iCJdoaCkg4ZZDkFpGmA; _gid=GA1.2.765369538.1657601866; _clck=8g3bfd|1|f36|0; _gcl_aw=GCL.1657869087.CjwKCAjwoMSWBhAdEiwAVJ2ndhFuT-37AUVqbkD-HODblRtqYC2W-9uaZaOVGfpj6mQkh9c07IoWwBoCzYcQAvD_BwE; _gac_UA-71763465-1=1.1657869087.CjwKCAjwoMSWBhAdEiwAVJ2ndhFuT-37AUVqbkD-HODblRtqYC2W-9uaZaOVGfpj6mQkh9c07IoWwBoCzYcQAvD_BwE; panoramaId_expiry=1657956815573; PHPSESSID=kbssb90i80u694uq6jestumcr5; __gpi=UID=00000664d3a87adf:T=1654519945:RT=1657897011:S=ALNI_MaMVHR3l7ltMti5ZGEDvbTj0lt2mA; FCNEC=[["AKsRol_ovDbbS9C0vpks6p9FfOH2ZLIcJrsdZHMytmFo8J3IAEFUCv7wTEKwKpyzaEOVVIFq1lyrwfquVnLFMy6H63EzKeNB0zzq5A3kxOUNbJl76IGHhpUGR192WUOkJ--8pgXyPXR9nnlXsno7Z6WNDrEaj0Ai1A=="],null,[]]; _ga_SZ454CLTZM=GS1.1.1657900288.14.1.1657900391.0; _ga_DWCCJLKX3X=GS1.1.1657903828.15.0.1657903833.55; _ga=GA1.2.1414512250.1654519942; _hjSession_2477396=eyJpZCI6IjlkMWU2MGM2LWRjYjQtNGIxZC1iNjhlLWRlOGI4ZjFlNTI5OSIsImNyZWF0ZWQiOjE2NTc5MDM4MzM5MjAsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _clsk=tu6xxg|1657903866603|1|1|k.clarity.ms/collect',
        Origin: "https://auth.geeksforgeeks.org",
        Referer: "https://auth.geeksforgeeks.org/user/dev_shivraj/profile",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua":
          '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  // console.log(response.data);
  const output = response.data;
  const rawstring = output.match(/data : (\W*.*\])/gi)[0];
  console.log(rawstring.match(/([0-9]+)/gi));
  const months = response.data.match(/([A-Za-z]+ [0-9]+)/gi);
  console.log(months);
}
// (data)\W*.*\]
UserData();
async function UserID() {
  const response = await axios.get(
    "https://auth.geeksforgeeks.org/user/dev_shivraj/profile"
  );
  console.log(response.data.match(/( "[0-9]+")/g));
}
UserID();
