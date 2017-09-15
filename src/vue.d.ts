declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

 declare module "*.html" {
  let template: string;
  export default template;
}
