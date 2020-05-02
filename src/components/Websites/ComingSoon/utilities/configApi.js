
export const baseUrl = {
  URL: "https://yellow-website.com"
}


export const comingsoon_contents = {
  URL: `${baseUrl.URL}/d8.yellow-website.com/jsonapi/block_content/com/f78ba2b4-a388-40d8-ae68-6bdcee594b27?include=field_logo_square`,
}

export const config_logo = {
  URL: `${baseUrl.URL}/d8.yellow-website.com/jsonapi/node/logo?include=field_image`,
}

export const contactFormUrl = {
  URL: `${baseUrl.URL}/d8.yellow-webiste.com/jsonapi/contact_message/feedback`
}



/**
 *
http://example.com/jsonapi/node/article/{{article_uuid}}?include=field_image,field_image.image,field_image.image.file--file&fields[field_image]=image&fields[file--file]=uri,url
 *
 *
 *
 */