export interface UiTemplateResolverOptions {
    exclude?: Array<string | RegExp>;
    /**
   * import style css or sass with components
   *
   * @default 'css'
   */
    importStyle?: boolean | 'css' | 'sass';

    /**
     * a list of component names that have no styles, so resolving their styles file should be prevented
     */
    noStylesComponents?: string[];
}