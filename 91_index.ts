/**
CMS Selector Based on a Given String
Write a function that takes an array of strings and a pattern (string) 
and returns the strings that contain the pattern in alphabetical order. I
f the pattern is an empty string, return all the strings passed in the input array.

Examples

cmsSelector(["WordPress", "Joomla", "Drupal"], "w") ➞ ["WordPress"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru") ➞ ["Drupal"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "") ➞ ["Drupal", "Joomla", "Magento", "WordPress"]

Notes
The given letter(s) are case sensitive and can be more than one.
In the case of an empty string, return the entire array.
A CMS is a Content Management System. 
*/


export function cmsSelector(ar:string[], pattern: string) : string[]{
    return ar.filter(word => word.includes(pattern)).sort();
}

console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "W"))
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "er"), ["Blogger"])
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], ""), ["Blogger", "Drupal", "Joomla", "Magento", "Shopify", "WordPress"])
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "oJ"), [])
