declare namespace PropsType {
  interface VibeProps {
    from_creator_id: number;
    from_creator_image: string;
    from_creator_name: string;
    to_creator_id: number;
    to_creator_image: string;
    to_creator_name: string;
    user_match: number;
    vibes_hidden: number;
    vibes_score: number;
    vibes_type: string;
  }
}

export = PropsType;
export as namespace PropsType;